const prompt = require("prompt-sync")()    // adiciona pacote para entrada de dados
const salario = Number(prompt("Salário R$: "))       // lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): "))
const quadrienios = Math.floor(tempo / 4)            // calcula quadriênios
const acrescimo = salario * quadrienios / 100        // ... e acréscimo
console.log(`Quadriênios: ${quadrienios}`)          // exibe as respostas
console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`)