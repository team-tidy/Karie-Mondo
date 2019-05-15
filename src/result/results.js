import api from '../services/api.js';
import loadUpdatedScore from '../load-updated-score.js';
import resultsDictionary from '../services/results-dictionary.js';
import finalScoreMessage from '../result/final-score-message.js';
import itemArray from '../services/item-data.js';

const avatarImage = document.getElementById('pic');
const avatarName = document.getElementById('avatar-name');
const finalMessageDom = document.getElementById('final-message');
const finalScore = document.getElementById('final-score');
const playAgainButton = document.getElementById('play-again-button');

playAgainButton.addEventListener('click', () => {
    window.location = './';
});

const user = api.getUser();
const profile = api.getProfile(user.id);
loadUpdatedScore();

avatarImage.src = './assets/' + profile.image + '.jpg';
avatarName.textContent = profile.name;

const finalMessage = finalScoreMessage(user.score, resultsDictionary, itemArray.length);
finalMessageDom.textContent = finalMessage;

const finalScoreString = 'You scored ' + user.score + ' points!';
finalScore.textContent = finalScoreString;
