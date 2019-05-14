function matchMaker(item, profile) {
    const profileKeyArray = Object.keys(profile.keywords);
    for(let i = 0; i < profileKeyArray.length; i++) {
        const profileKey = profileKeyArray[i];
        if(item.keywords[profileKey]) {
            return true;
        }
    }
    return false;
}

export default matchMaker;