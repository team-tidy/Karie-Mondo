import profileArray from '../src/services/profile-data.js';

const test = QUnit.test;

QUnit.module('load-user');

test('load user profile ', (assert) => {
    // arrange
    const user = {
        image: 'Alex.jpg', 
        name: 'Alex',
        score: 0
    };
    // act
    const result = loadProfile();
    // assert
    assert.deepEqual(result, user);
});