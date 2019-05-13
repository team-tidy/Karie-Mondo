import itemData from '../services/item-data.js';

const itemImage = document.getElementById('item-image');
const itemName = document.getElementById('item-name');


itemName.textContent = itemData.name;
itemImage.src = 'assets/items/' + itemData.image + '.jpg';