import api from '../src/services/api.js';
import profileArray from '../src/services/profile-data.js';

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

test('get profile by id', assert => {
    // arrange
    const id = 1;
    const expected = profileArray[0];
    // act
    const result = api.getProfile(id);
    // assert
    assert.deepEqual(result, expected);
});