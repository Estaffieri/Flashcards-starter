const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");


class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
}

module.exports = Round;
