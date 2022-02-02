// arrow function

// Ao inves de declarar a função desta maneira abaixo:
// const sayMyName = function () {}
//
// Vou utilizar o arrow function

const sayMyName = () => {
  console.log('Elthon')
}

sayMyName()

// Posso fazer a função receber parametros:

const sayMyName2 = name => {
  console.log(name)
}

sayMyName2('Erick Rodrigues')
