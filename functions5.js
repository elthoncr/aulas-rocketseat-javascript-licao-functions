// functions scope
let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(`Impressão do subject antes da função: ${subject}`)
console.log(
  `Impressão do subject passando um argumento para a função: ${createThink(
    subject
  )}`
)
console.log(`Impressão depois: ${subject}`)
