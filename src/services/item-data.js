const item1 = {
    id: 1,
    name: 'Sticker Book',
    image: 'stick',
    keywords: {
        stickers: true,
        colorful: true
    }
};

const item2 = {
    id: 2,
    name: 'Magic Wand',
    image: 'wand',
    keywords: {
        wand: true,
    }
};

const item3 = {
    id: 3,
    name: 'Mickey Watch',
    image: 'watch',
    keywords: {
        kid: true
    }
};

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
}

const itemArray = [item1, item2, item3];
const result = shuffle(itemArray);
export default result;