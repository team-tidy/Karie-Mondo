const test = QUnit.test;

QUnit.module('api');

const api = {
    saveUser(user) {
        const json = JSON.stringify(user);
        localStorage.setItem('user', json);
    },
    getUser() {
        const json = localStorage.getItem('user');
        const user = JSON.parse(json);
        return user;
    }
};

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