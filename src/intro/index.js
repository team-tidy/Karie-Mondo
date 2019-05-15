import makeUser from './make-user.js';
import api from '../services/api.js';

const characterForm = document.getElementById('character-form');

characterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(characterForm);
    const characterId = parseInt(formData.get('character'));
    const user = makeUser(characterId);
    api.saveUser(user);
    window.location = './game.html';
});