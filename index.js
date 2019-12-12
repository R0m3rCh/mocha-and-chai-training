function fizzBuzzSequence(numbersArray) {
  let response = []
  numbersArray.forEach(el =>
    response.push(fizzBuzz(el))
    )
  return response
}

function fizzBuzz(number) {
  return (number % 3 == 0 ? "Fizz" : "") + (number % 5 == 0 ? "Buzz" : "") || number
}

function responseReset() {
  response = [];
}

module.exports = {
  fizzBuzz: fizzBuzz,
  fizzBuzzSequence: fizzBuzzSequence,
  responseReset: responseReset
}
