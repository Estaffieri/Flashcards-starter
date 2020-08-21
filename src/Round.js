const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");


class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentTurn = {};
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {

    const currentCard = this.returnCurrentCard();
    this.currentTurn = new Turn(guess, currentCard);

    //compares to card correct answers vis turn.evaluateGuess()
    //add to incorrectGuesses array.
    this.turns++;
    return this.currentTurn.giveFeedback();


  }
}

module.exports = Round;
