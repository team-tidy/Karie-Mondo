function isGuessCorrect(choiceId, match) {
    if(choiceId === 'sparks-joy' && match) {
        return true;
    }
    // if user chose keep and match is false
    else if(choiceId === 'sparks-joy' && !match) { 
        return false;
    }
    // if user chose thank-you and match is true
    else if(choiceId === 'thank-you' && match) {
        return false;
    } 
    // if user chose thank-you and match is false
    else if(choiceId === 'thank-you' && !match) {
        return true;
    }
}
export default isGuessCorrect;