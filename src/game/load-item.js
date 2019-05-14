import itemArray from '../services/item-data.js';

function loadItem(itemCounter) {
    const itemImage = document.getElementById('item-image');
    const itemName = document.getElementById('item-name'); 

    itemName.textContent = itemArray[itemCounter].name;
    itemImage.src = './assets/items/' + itemArray[itemCounter].image + '.jpg';
}

export default loadItem;