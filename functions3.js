// function expression
// function anonymous

// parâmetros (parameters)
const sum = function (number1, number2) {
  total = number1 + number2
  return total
}

sum(2, 3) // arguments - argumentos
sum(4, 5)
sum(123, 12312312344)
sum('asdasd', 12123)
sum('99', -2)

let number1 = 24
let number2 = 6

//
// console.log(`o numero 1 é ${number1}`)
// console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
