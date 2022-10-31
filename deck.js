function getCards(amount) {
    if (amount == 1) {
        return "Ace of Spades"
    }
    return Array(52)
}

module.exports = {getCards}