function isGuessCorrect(choiceId, match) {
    if(choiceId === 'sparks-joy' && match) {
        return true;
    }
    else if(choiceId === 'sparks-joy' && !match) { 
        return false;
    }
    else if(choiceId === 'thank-you' && match) {
        return false;
    } 
    else if(choiceId === 'thank-you' && !match) {
        return true;
    }
}

export default isGuessCorrect;