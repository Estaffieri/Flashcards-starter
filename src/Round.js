const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");


class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
  }
}

module.exports = Round;
