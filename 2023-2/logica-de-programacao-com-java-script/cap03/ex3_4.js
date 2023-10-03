const prompt = require("prompt-sync")()    // adiciona o pacote ao programa

const pesoKg = Number(prompt("Peso da Ração (kg): "))  // lê dados de entrada
const consumo = Number(prompt("Consumo Diário (gr): "))

const pesoGr = pesoKg * 1000                  // cria variável auxiliar pesoGr              

const duracao = Math.floor(pesoGr / consumo)  // cálculo das respostas            
const sobra = pesoGr % consumo

console.log(`Duração: ${duracao} dias`)      // dados de saída
console.log(`Sobra: ${sobra}gr`)