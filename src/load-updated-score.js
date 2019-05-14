import api from './services/api.js';

function loadUpdatedScore() {
    const score = document.getElementById('score');
    const user = api.getUser();
    score.textContent = user.score;
}

export default loadUpdatedScore;