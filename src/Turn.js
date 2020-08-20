const Card = require("../src/Card")

class Turn {
  constructor(userGuess, Card) {
    this.userGuess = userGuess;
    this.currentCard = Card;
  }
  returnGuess() {
    return this.userGuess;
  }
  returnCard(){
    return this.currentCard;
  }
}
module.exports = Turn;
