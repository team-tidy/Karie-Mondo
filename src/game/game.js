import itemArray from '../services/item-data.js';

const itemImage = document.getElementById('item-image');
const itemName = document.getElementById('item-name');


itemName.textContent = itemArray[0].name;
itemImage.src = 'assets/items/' + itemArray[0].image + '.jpg';