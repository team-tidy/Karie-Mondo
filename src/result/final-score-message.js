function finalScoreMessage(score, resultDictionary, itemArrayLength) {
    if(score <= itemArrayLength * (1 / 3)) {
        return resultDictionary.lost;
    } 
    else if(score <= itemArrayLength * (2 / 3)) {
        return resultDictionary.okay;
    }
    else if(score > itemArrayLength * (2 / 3) && score <= itemArrayLength) {
        return resultDictionary.win;
    }
}

export default finalScoreMessage;

