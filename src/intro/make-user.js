function makeUser(characterId) {
    const user = {
        id: characterId,
        score: 0
    };
    return user;  
}

export default makeUser;