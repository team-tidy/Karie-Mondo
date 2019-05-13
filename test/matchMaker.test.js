import matchMaker from '../src/game/matchMaker.js';

const test = QUnit.test;

QUnit.module('matchMaker');

test('comparing profile and item keys, testing for true on match', (assert) => {
    // arrange
    const item1 = {
        keywords: {
            stickers: true,
            colorful: true
        }
    };

    const profile1 = {
        keywords: {
            stickers: 'I like the colors.',
            kid: 'I am a giant kid.'
        }
    };
    
    const expected = true;

    // act
    const result = matchMaker(item1, profile1);

    // assert
    assert.equal(result, expected);
});

test('comparing profile and item keys, testing for false on mismatch', (assert) => {
    // arrange
    const item1 = {
        keywords: {
            fun: true,
            colorful: true
        }
    };

    const profile1 = {
        keywords: {
            stickers: 'I like the colors.',
            kid: 'I am a giant kid.'
        }
    };
    
    const expected = false;

    // act
    const result = matchMaker(item1, profile1);

    // assert
    assert.equal(result, expected);
});
