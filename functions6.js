// function hoisting
sayMyName()

function sayMyName() {
  console.log('Elthon')
}

// function usando hoisting de forma errada

sayMyName2()

const sayMyName2 = function sayMyName2() {
  console.log('Erick')
}
