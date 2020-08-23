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
    if (!this.currentTurn.evaluateGuess()){
      this.incorrectGuesses.push(currentCard.id);
    }
    this.turns++;
    return this.currentTurn.giveFeedback();
  }
  calculatePercentCorrect() {
    const amountIncorrect = this.incorrectGuesses.length;
    const amountCorrect = this.deck.cards.length - amountIncorrect;
    return Math.floor((amountCorrect / this.deck.cards.length) *100);
  }
  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    return `**Round Over!** You've answered ${percentCorrect}% of the questions correctly!`
  }
}

module.exports = Round;
