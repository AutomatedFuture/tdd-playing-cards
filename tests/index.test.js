const deck = require("../deck"); // this is the line to add

test("test setup working", () => {
    expect(true).toBeTruthy();
});

test("returns a card", () => {
    const amount = 1;
    const expected = "Ace of Spades";
    const actual = deck.getCards(amount);
    expect(actual).toBe(expected);
});

test("gets all the cards", () => {
    const amount = 52;
    const expected = 52;
    const hand = deck.getCards(amount);
    const checkUnique = deck.checkUniqueHand(hand);
    const actual = hand.length;
    expect(actual).toBe(expected);
    expect(checkUnique).toBe(true);
});

test("gets 5 cards", () => {
    const amount = 5;
    const expected = 5;
    const hand = deck.getCards(amount);
    const checkUnique = deck.checkUniqueHand(hand);
    const actual = hand.length;
    expect(actual).toBe(expected);
    expect(checkUnique).toBe(true);
});

test("no two cards are the same", () => {
    // your turn
    const amount = 52;
    const hand = deck.getCards(amount);
    const checkUnique = deck.checkUniqueHand(hand);
    expect(checkUnique).toBe(true);
});
