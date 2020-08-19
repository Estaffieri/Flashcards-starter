const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn" ,function() {

  it("should be a function", function() {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should take in two arguments", function() {
    const turn = new Turn("userGuess", Object);

    // expect(turn).to.include("userGuess", Card);
    expect(turn.userGuess).to.equal("userGuess");
    expect(turn.currentCard).to.equal(Object);
  })

  it("should have a method to return a guess", function () {
    
  })
});
