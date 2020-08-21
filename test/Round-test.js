const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", function() {
  let card, guess1, guess2, turn1, turn2;
  beforeEach(function() {
    card = new Card(1, "What is Robbie\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    guess1 = "A users guess";
    guess2 = "sea otter";
    turn1 = new Turn(guess1, card);
    turn2 = new Turn(guess2, card);
    let card1 = new Card(1, "What is Sam\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    let card2 = new Card(1, "What is Estelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    let card3 = new Card(1, "What is Rochelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    const deck = new Deck([card1, card2, card3])
  });

  it("should be a function", function() {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function() {
    const deck = new Deck()
    const round = new Round(deck)
    expect(round).to.be.an.instanceof(Round);
  });

  it("should start with no turns", function() {
    const deck = new Deck()
    const round = new Round(deck)
    expect(round.turns).to.equal(0);
  });

  it("should have a way to return the current card", function() {
    let card1 = new Card(1, "What is Sam\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    let card2 = new Card(1, "What is Estelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    let card3 = new Card(1, "What is Rochelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)


    expect(round.returnCurrentCard()).to.equal(card1);
  });



});
