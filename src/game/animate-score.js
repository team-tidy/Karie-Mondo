function animateScore(score) {
    const scoreAnimation = document.getElementById('score-animation');
    const submitButton = document.getElementById('submit-button');
    scoreAnimation.textContent = '+' + score;
    scoreAnimation.classList.add('elementToFadeOut');
    submitButton.setAttribute('disabled', 'true');
    setTimeout(function(){
        submitButton.removeAttribute('disabled');
        scoreAnimation.classList.remove('elementToFadeOut');
    }, 2000);
}

export default animateScore;