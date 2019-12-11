let response = []

function fizzBuzzSequence(numbersArray) {
  numbersArray.forEach(el =>
    response.push(fizzBuzz(el))
    )
  return response
}

function fizzBuzz(number) {
  if((number % 3) == 0 && (number % 5) == 0){
    return "FizzBuzz"
  }
  if((number % 3) == 0) {
    return "Fizz"
  }
  if((number % 5) == 0 ) {
    return "Buzz"
  }
  return number
}

function responseReset() {
  response = [];
}

module.exports = {
  fizzBuzz: fizzBuzz,
  fizzBuzzSequence: fizzBuzzSequence,
  responseReset: responseReset
}
