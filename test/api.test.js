import api from '../src/services/api.js';

const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('round trip of object destined for storage', assert => {
    // arrange
    const user = {
        id: 1,
        score: 0
    };
    // act
    api.saveUser(user);
    const result = api.getUser();
    // assert
    assert.deepEqual(result, user);
});