const test = QUnit.test;

QUnit.module('updateUserScore');

test('update user score', (assert) => {
    // arrange
    const user = {
        id: 1,
        score: 0
    };

    const num = 1;
    // act
    const result = updateUserScore(user, num);
    // assert
    assert.deepEqual(result, user);
});
