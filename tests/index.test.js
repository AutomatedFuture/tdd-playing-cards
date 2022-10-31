const deck = require('../deck') // this is the line to add

test('test setup working', () => {
    expect(true).toBeTruthy()
})

test('gets all the cards', () => {
    const amount = 52
    const expected = 52
    const hand = deck.getCards(amount)
    const actual = hand.length
    expect(actual).toBe(expected)
  })