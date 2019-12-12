var assert = require('assert')
var chaiExpect = require('chai').expect
var should = require('chai').should()

const FIZZBUZZ = require('../index.js')
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let expectedArray = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

describe('FizzBuzz', function() {
  describe('Mocha Assertions', function() {
    it('should return Fizz when the value is 6', function() {
      assert.equal(FIZZBUZZ.fizzBuzz(3), 'Fizz')
    })

    it('should return Buzz when the value is 20', function() {
      assert.equal(FIZZBUZZ.fizzBuzz(20), 'Buzz')
    })

    it('should return FizzBuzz when the value is 15', function() {
      assert.equal(FIZZBUZZ.fizzBuzz(15), 'FizzBuzz')
    })
  })

  describe('Chai Expect', function() {
    it('should return a string when the value is 3', function() {
      chaiExpect(FIZZBUZZ.fizzBuzz(3)).to.be.a('String')
    })

    it('should return an integer when the value is 4', function() {
      chaiExpect(FIZZBUZZ.fizzBuzz(4)).to.be.a('number')
    })
  })

  describe('Chai Should', function() {
    it('should return a string when the value is 15', function() {
      FIZZBUZZ.fizzBuzz(15).should.be.a('String')
    })

    it('should return an integer when the value is 8', function() {
      FIZZBUZZ.fizzBuzz(8).should.be.a('number')
    })

    it('should return "FizzBuzz "when the value is 0', function() {
      FIZZBUZZ.fizzBuzz(0).should.equal('FizzBuzz')
    })

    it('should return an integer when the value is -7', function() {
      FIZZBUZZ.fizzBuzz(-7).should.be.a('number')
    })
  })

  describe('fizzBuzzSequense()', function() {
    
    it('should return an array when the value is an array of numbers',
    function() {
      chaiExpect(FIZZBUZZ.fizzBuzzSequence(numbersArray)).to.be.an('array')
    })

    it('should return an array with a "Fizz" element when the value is an array of numbers',
    function() {
      chaiExpect(FIZZBUZZ.fizzBuzzSequence(numbersArray)).to.be.an('array')
        .that.includes('Fizz', 'buzz', "FizzBuzz")
    })

    it('should return an array element when the value is an array of numbers',
    function() {
      assert.deepEqual(FIZZBUZZ.fizzBuzzSequence(numbersArray), expectedArray)
    })

    it('should return 4 when the value is an array of numbers',
    function() {
      assert.deepEqual(FIZZBUZZ.fizzBuzzSequence([4]), [4])
    })
  })
})
