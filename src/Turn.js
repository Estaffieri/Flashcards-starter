const Card = require("../src/Card")

class Turn {
  constructor(userGuess, Card) {
    this.userGuess = userGuess;
    this.currentCard = Card;

  }
}
module.exports = Turn;
