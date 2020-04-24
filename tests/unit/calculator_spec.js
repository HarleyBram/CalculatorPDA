var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function () {
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 5)
  })

  it('it can subtract', function () {
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  })

  it('it can multiply', function () {
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 15)
  })

  it('it can divide', function () {
    calculator.numberClick(2)
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  })

  it('it can multiply', function () {
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 15)
  })

  it('concatenate multiple number button clicks', function () {
    calculator.numberClick(1)
    calculator.numberClick(1)
    assert.equal(calculator.runningTotal, 11)
  })

  it('chain multiple operations together', function () {
    calculator.numberClick(2)
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    
    assert.equal(calculator.runningTotal, 4)
  })

  it('clear the running total without affecting the calculation', function () {
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  })
});
