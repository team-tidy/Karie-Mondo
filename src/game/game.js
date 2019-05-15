import itemArray from '../services/item-data.js';
import api from '../services/api.js';
import matchMaker from '../game/match-maker.js';
import updateUserScore from './update-user-score.js';
import loadUpdatedScore from '../load-updated-score.js';
import loadItem from '../game/load-item.js';
import animateScore from '../game/animate-score.js';
import isGuessCorrect from '../game/is-guess-correct.js';

const avatarImage = document.getElementById('pic');
const avatarName = document.getElementById('avatar-name');
const choiceForm = document.getElementById('choice-form');

let itemCounter = 0;
const scoreToAdd = 1;
const sparkArray = [];
const thankYouArray = [];

const user = api.getUser();
const profile = api.getProfile(user.id);

avatarImage.src = './assets/' + profile.image + '.jpg';
avatarName.textContent = profile.name;

loadItem(itemCounter);
loadUpdatedScore();

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choices');
    if(choiceId === 'sparks-joy') {
        sparkArray.push(itemArray[itemCounter]);
    }
    else if(choiceId === 'thank-you') {
        thankYouArray.push(itemArray[itemCounter]);
    }

    const match = matchMaker(itemArray[itemCounter], profile);
    const correctGuess = isGuessCorrect(choiceId, match);

    if(correctGuess) {
        const updatedUser = updateUserScore(user, scoreToAdd);
        api.saveUser(updatedUser);
        animateScore(1);
    }
    else {
        animateScore(0);
    }

    itemCounter++; 
    if(itemArray[itemCounter] === undefined) {
        api.saveSortedItems(sparkArray, thankYouArray);
        window.location = './results.html';
    }
    loadUpdatedScore();
    loadItem(itemCounter);
});

