import itemArray from '../services/item-data.js';
import api from '../services/api.js';
import matchMaker from '../game/matchMaker.js';

const itemImage = document.getElementById('item-image');
const itemName = document.getElementById('item-name');
const avatarImage = document.getElementById('pic');
const avatarName = document.getElementById('avatar-name');
const choiceForm = document.getElementById('choice-form');
const score = document.getElementById('score');

// this is our counter variable mentioned below
// Kate proposed to use a variable as a counter and increment it to look through the itemArray after clicking
let itemCounter = 0;

// will move this LATER!
function loadItem(itemCounter) {
    itemName.textContent = itemArray[itemCounter].name;
    itemImage.src = './assets/items/' + itemArray[itemCounter].image + '.jpg';
}

const user = api.getUser();
const profile = api.getProfile(user.id);

avatarImage.src = './assets/' + profile.image + '.jpg';
avatarName.textContent = profile.name;
score.textContent = user.score;

loadItem(itemCounter);

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choices');
    // if user chose keep and match is true
    if(choiceId === 'sparks-joy' && matchMaker(itemArray[itemCounter], profile)) {
        console.log('keep-match');
    }
    // if user chose keep and match is false
    else if(choiceId === 'sparks-joy' && !matchMaker(itemArray[itemCounter], profile)) { 
        console.log('keep-no-match');
    }
    // if user chose thank-you and match is true
    else if(choiceId === 'thank-you' && matchMaker(itemArray[itemCounter], profile)) {
        console.log('no-keep-match');
    } 
    // if user chose thank-you and match is false
    else if(choiceId === 'thank-you' && !matchMaker(itemArray[itemCounter], profile)) {
        console.log('no-keep-no-match');
    }
    itemCounter++;
    loadItem(itemCounter);
});




