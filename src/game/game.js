import itemArray from '../services/item-data.js';
import api from '../services/api.js';
import matchMaker from '../game/match-maker.js';
import updateUserScore from './update-user-score.js';
import loadUpdatedScore from '../load-updated-score.js';
import loadItem from '../game/load-item.js';

const avatarImage = document.getElementById('pic');
const avatarName = document.getElementById('avatar-name');
const choiceForm = document.getElementById('choice-form');

// our counter variable below is tracking itemArray index
let itemCounter = 0;
const scoreToAdd = 1;

// we will need to include some of the following lines below into an updateScore function, update user score from the DOM
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
    // These following lines will help to determine score
    const match = matchMaker(itemArray[itemCounter], profile);
    // if user chose keep and match is true
    if(choiceId === 'sparks-joy' && match) {
        const updatedUser = updateUserScore(user, scoreToAdd);
        api.saveUser(updatedUser);
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
    }
    // these two lines will help go to the next item
    itemCounter++; 
    loadUpdatedScore();
    loadItem(itemCounter);
    // still need to save items into two arrays 'spark' and 'thank'
    // still need to redirect to end page when finished with item array
});
    




