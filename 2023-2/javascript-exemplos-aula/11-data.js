/*
new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
*/

// usando objetos Date
let inicio = new Date("2023/07/24");
console.log(inicio)
var fim = Date.now();
console.log(fim)
var decorrido = fim - inicio; // tempo decorrido em milisegundos
console.log(decorrido)

console.log("\n===\n")

var inicio01 = new Date(2023, 06, 24); //aqui começa no 0 o mês
console.log(inicio01)
var fim01 = new Date();
console.log(fim01)
var decorrido01 = fim01.getTime() - inicio01.getTime() ; // tempo decorrido em milisegundos
console.log(decorrido01)

console.log(" === ")

const hoje = new Date()
const dia = hoje.getDate()
const mes = hoje.getMonth() + 1 // mês começa em 0
const ano = hoje.getFullYear()
const dia2 = dia.toString().padStart(2, "0")
const mes2 = mes.toString().padStart(2, "0")
console.log(`Data: ${dia2}/${mes2}/${ano}`)
