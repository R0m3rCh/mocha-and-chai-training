var assert = require('assert')
var chaiExpect = require('chai').expect
var should = require('chai').should()
const FIZZBUZZ = require('../index.js')

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
  })
})
