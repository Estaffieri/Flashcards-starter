const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = {};
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  start() {
    const currentDeck = new Deck(prototypeQuestions)
    this.currentRound = new Round(currentDeck)
    //invokes this.printMessage
    //invokex this.printQuestion
  }
}

module.exports = Game;
