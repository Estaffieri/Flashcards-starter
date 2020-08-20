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
    turn2 = new Turn(guess2, card);
    let card1 = new Card(1, "What is Sam\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    let card2 = new Card(1, "What is Estelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    let card3 = new Card(1, "What is Rochelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
  });

  it("should be a function", function() {
    expect(Deck).to.be.a("function");
  });

  it("should be an instance of Deck", function() {
    const deck = new Deck()
    expect(deck).to.be.an.instanceof(Deck);
  });

  it("should be an array of cards", function() {
    let card1 = new Card(1, "What is Sam\'s favorite animal", ["sea otter", "pug", "capybara"],"sea otter");
    let card2 = new Card(1, "What is Estelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    let card3 = new Card(1, "What is Rochelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    const deck = new Deck([card1, card2, card3])

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it("should be able to count cards", function() {
    let card1 = new Card(1, "What is Sam\'s favorite animal", ["sea otter", "pug", "capybara"],"sea otter");
    let card2 = new Card(1, "What is Estelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    let card3 = new Card(1, "What is Rochelle\'s favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
    const deck = new Deck([card1, card2, card3]);
    
    expect(deck.countCards()).to.equal(3);
  });

});
