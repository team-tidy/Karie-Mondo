function finalScoreMessage(score, resultDictionary) {
    if(score === 0) {
        return resultDictionary.lost;
    } 
    else if(score === 1 || score === 2) {
        return resultDictionary.okay;
    }
    else if(score === 3) {
        return resultDictionary.win;
    }
}
export default finalScoreMessage;