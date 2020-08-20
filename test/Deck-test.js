const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Deck", function() {
  let card, guess1, guess2, turn1, turn2;
  beforeEach(function() {
    card = new Card(1, "What is Robbie\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    guess1 = "A users guess";
    guess2 = "sea otter";
    turn1 = new Turn(guess1, card);
    turn2 = new Turn(guess2, card)
  });

  it("should be a function", function() {
    expect(Deck).to.be.a("function");
  });

  it("should be an array of card objects", function())
  it("should be able to count how many cards are in the deck", function())
});
