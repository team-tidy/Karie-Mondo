import finalScoreMessage from '../src/result/final-score-message.js';
const test = QUnit.test;

QUnit.module('final-score-message');

test('spit out lost message', (assert) => {
    // arrange
    const score = 0;
    const resultDictionary = { win: 'You Won!', okay: 'You did okay', lost: 'You lost' };
    const expected = 'You lost';
    // act
    const result = finalScoreMessage(score, resultDictionary);
    // assert
    assert.equal(result, expected);
});

test('spit out okay message', (assert) => {
    // arrange
    const score = 2;
    const resultDictionary = { win: 'You Won!', okay: 'You did okay', lost: 'You lost' };
    const expected = 'You did okay';
    // act
    const result = finalScoreMessage(score, resultDictionary);
    // assert
    assert.equal(result, expected);
});

test('spit out win message', (assert) => {
    // arrange
    const score = 3;
    const resultDictionary = { win: 'You Won!', okay: 'You did okay', lost: 'You lost' };
    const expected = 'You Won!';
    // act
    const result = finalScoreMessage(score, resultDictionary);
    // assert
    assert.equal(result, expected);
});
