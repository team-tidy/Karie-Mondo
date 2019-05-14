import api from '../services/api.js';
import loadUpdatedScore from '../load-updated-score.js';

const avatarImage = document.getElementById('pic');
const avatarName = document.getElementById('avatar-name');

const user = api.getUser();
const profile = api.getProfile(user.id);
loadUpdatedScore();

avatarImage.src = './assets/' + profile.image + '.jpg';
avatarName.textContent = profile.name;
