import itemArray from '../services/item-data.js';
import api from '../services/api.js';

const itemImage = document.getElementById('item-image');
const itemName = document.getElementById('item-name');


itemName.textContent = itemArray[0].name;
itemImage.src = './assets/items/' + itemArray[0].image + '.jpg';

const avatarImage = document.getElementById('pic');
const avatarName = document.getElementById('avatar-name');
const score = document.getElementById('score');

const user = api.getUser();
const profile = api.getProfile(user.id);

avatarImage.src = './assets/Alex.jpg';
// avatarImage.src = './assets/' + profile.image + '.jpg';
avatarName.textContent = profile.name;
score.textContent = user.score;