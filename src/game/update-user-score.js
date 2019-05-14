function updateUserScore(user, num) {
    user.score += num;
    return user;
}

export default updateUserScore;