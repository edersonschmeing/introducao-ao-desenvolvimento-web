const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")              // Lê nome do produto e ...
const num = Number(prompt("Nº de Etiquetas: "))  // quantidade de etiquetas
// Cria um laço de repetição até num/2 (pois imprime 2 etiquetas por linha)
for (let i = 1; i <= num / 2; i++) {
  console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (num % 2 == 1) {        // se quantidade solicitada de etiquetas for ímpar...              
  console.log(produto)    // imprime mais uma etiqueta
}