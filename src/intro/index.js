import makeUser from './make-user.js';
import api from '../services/api.js';

const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    const user = makeUser();
    api.saveUser(user);
    window.location = './game.html';
});