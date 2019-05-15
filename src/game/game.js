import itemArray from '../services/item-data.js';
import api from '../services/api.js';
import matchMaker from '../game/match-maker.js';
import updateUserScore from './update-user-score.js';
import loadUpdatedScore from '../load-updated-score.js';
import loadItem from '../game/load-item.js';

const avatarImage = document.getElementById('pic');
const avatarName = document.getElementById('avatar-name');
const choiceForm = document.getElementById('choice-form');
const plusOne = document.getElementById('plusOne');

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
    // These following lines will help to determine score
    const match = matchMaker(itemArray[itemCounter], profile);
    // if user chose keep and match is true
    if(choiceId === 'sparks-joy' && match) {
        const updatedUser = updateUserScore(user, scoreToAdd);
        api.saveUser(updatedUser);
        plusOne.classList.add('elementToFadeOut');
        choiceForm.setAttribute('disabled', 'true');
        setTimeout(function(){
            choiceForm.removeAttribute('disabled');
            plusOne.classList.remove('elementToFadeOut');
        }, 2000);
    }
    // if user chose keep and match is false
    else if(choiceId === 'sparks-joy' && !match) { 
        console.log('keep-no-match');
    }
    // if user chose thank-you and match is true
    else if(choiceId === 'thank-you' && match) {
        console.log('thank-match');
    } 
    // if user chose thank-you and match is false
    else if(choiceId === 'thank-you' && !match) {
        const updatedUser = updateUserScore(user, scoreToAdd);
        api.saveUser(updatedUser);
        plusOne.classList.add('elementToFadeOut');
        choiceForm.setAttribute('disabled', 'true');
        setTimeout(function(){
            choiceForm.removeAttribute('disabled');
            plusOne.classList.remove('elementToFadeOut');
        }, 2000);
    }
    // these two lines will help go to the next item
    itemCounter++; 
    if(itemArray[itemCounter] === undefined) {
        api.saveSortedItems(sparkArray, thankYouArray);
        window.location = './results.html';
    }
    loadUpdatedScore();
    loadItem(itemCounter);
});