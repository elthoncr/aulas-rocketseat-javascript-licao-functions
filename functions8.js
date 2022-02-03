// callback function - chamar uma função de volta

function sayMyName(name) {
  console.log('antes de executar a funcao callback')
  name()
  console.log('depois de executar a callback')
}

sayMyName(() => {
  console.log('Estou em uma callback')
})

// O conceito de callback é chamar uma função dentro de outra função.
// Exemplo:
// Dentro da função abaixo:
/**
 * 
  function sayMyName(name) {
  console.log('antes de executar a funcao callback')
  name()
  console.log('depois de executar a callback')
  }
 */

// A Função sayMyName esta recebendo como parametro outra função.

// No codigo abaixo a função sayMyName esta passado como argumento uma arrow function:
/**
   * 
      sayMyName(() => {
        console.log('Estou em uma callback')
      })
   */
