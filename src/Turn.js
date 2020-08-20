const Card = require("../src/Card")

class Turn {
  constructor(userGuess, Card) {
    this.userGuess = userGuess;
    this.currentCard = Card;
  }
  returnGuess() {
    return this.userGuess;
  }
}
module.exports = Turn;
