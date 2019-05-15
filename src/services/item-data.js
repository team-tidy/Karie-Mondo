const bearHat = {
    id: 1,
    name: 'Bear Hat',
    image: 'bear-hat',
    keywords: {
        hat: true,
        bear: true
    }
};

const teddyBear = {
    id: 2,
    name: 'Teddy Bear',
    image: 'teddy-bear',
    keywords: {
        bear: true,
    }
};

const microphone = {
    id: 3,
    name: 'Microphone',
    image: 'microphone',
    keywords: {
        microphone: true
    }
};

const colorfulHat = {
    id: 4,
    name: 'Colorful Hat',
    image: 'colorful-hat',
    keywords: {
        hat: true
    }
};

const thailandHat = {
    id: 5,
    name: 'Thailand Hat',
    image: 'thailand-hat',
    keywords: {
        hat: true
    }
};

const netherlandsPic = {
    id: 6,
    name: 'Netherlands Picture',
    image: 'netherlands-pic',
    keywords: {
        netherlands: true
    }
};

const washiTape = {
    id: 7,
    name: 'Washi Tape',
    image: 'washi-tape',
    keywords: {
        artsy: true
    }
};

const marbles = {
    id: 8,
    name: 'Marbles',
    image: 'marbles',
    keywords: {
        marbles: true
    }
};

const pig = {
    id: 9,
    name: 'Pig',
    image: 'pig',
    keywords: {
        cute: true
    }
};

const clarinetReeds = {
    id: 10,
    name: 'Clarinet Reeds',
    image: 'clarinet-reeds',
    keywords: {
        clarinet: true
    }
};

const disneyShirt = {
    id: 11,
    name: 'Disney Shirt',
    image: 'disney-shirt',
    keywords: {
        colorful: true
    }
};

const fishEarrings = {
    id: 12,
    name: 'Fish Earrings',
    image: 'fish-earrings',
    keywords: {
        colorful: true
    }
};

const lionKing = {
    id: 13,
    name: 'Lion King Toy',
    image: 'lion-king',
    keywords: {
        kid: true
    }
};

const shelSilverstein = {
    id: 14,
    name: 'Shel Silverstein Book',
    image: 'shel-silverstein',
    keywords: {
        kid: true
    }
};

const wand = {
    id: 15,
    name: 'Wand',
    image: 'wand',
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

const itemArray = [bearHat, teddyBear, microphone, colorfulHat, thailandHat, netherlandsPic, 
    washiTape, marbles, pig, clarinetReeds, disneyShirt, fishEarrings, lionKing, shelSilverstein, 
    wand];
const result = shuffle(itemArray);
export default result;