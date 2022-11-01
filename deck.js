const ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
];

const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomCard() {
    return [
        ranks[getRandomInt(ranks.length)],
        suits[getRandomInt(suits.length)],
    ];
}

function convertHandToString(hand) {
    handToString = [];
    for (let i = 0; i < hand.length; i++) {
        handToString.push(hand[i][0] + " of " + hand[i][1]);
    }
    return handToString;
}

function getCards(amount) {
    if (amount == 1) {
        return "Ace of Spades";
    }
    if (amount > 52) {
        console.log("Amount exceeds the number of possible cards (52)");
        return [];
    }

    hand = [];

    while (true) {
        if (hand.length == amount) {
            break;
        }
        random_card = getRandomCard();
        if (hand.includes(random_card)) {
            continue;
        } else {
            hand.push(random_card);
        }
    }

    return hand;
}

function checkUniqueHand(hand) {
    const unique = Array.from(new Set(hand));

    if (hand.length === unique.length) {
        return true;
    } else {
        return false;
    }
}

module.exports = { getCards, checkUniqueHand };
