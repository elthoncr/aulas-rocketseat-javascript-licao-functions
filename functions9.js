/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

// Esta função abaixo chamado Person tem a letra maiuscula na letra 'P' de Person.
// Usar a primeira letra da palavra maiuscula, não é obrigatorio, mas é uma boa prática.

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' esta andando'
  }
}

const mayk = new Person('Mayk')
const joao = new Person('Joao')
console.log(mayk.walk())
console.log(mayk.walk())
