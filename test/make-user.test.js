import makeUser from '../src/intro/make-user.js';

const test = QUnit.test;

QUnit.module('make-user');

test('create user object from profile id', (assert) => {
    // arrange
    const user = {
        id: 1,
        score: 0
    };
    // act
    const result = makeUser();
    // assert
    assert.deepEqual(result, user);
});

