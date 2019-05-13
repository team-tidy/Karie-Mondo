import itemArray from '../services/item-data.js';

const itemImage = document.getElementById('item-image');
const itemName = document.getElementById('item-name');


itemName.textContent = itemArray.name;
itemImage.src = 'assets/items/' + itemArray.image + '.jpg';