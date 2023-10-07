const prompt = require("prompt-sync")()
console.log("Informe o valor dos saques ou 0 para sair")
const saques = []      // declara vetor
do {
  const valor = Number(prompt("Saque R$: "))   // lê valor
  if (valor == 0) {
    break                                      // sai da repetição
  }
  saques.push(valor)                           // adiciona ao vetor saques
  if (valor % 10 == 0) {
    console.log("Saque Realizado com Sucesso")
  } else {
    console.log("Erro... Valor Inválido (deve ser múltiplo de 10)")
  }
} while (true)
console.log("\nSaques Válidos")                // \n no início gera uma nova linha
console.log("-".repeat(40))                    // exibe 40 -
const saquesValidos = saques.filter(saque => saque % 10 == 0)
for (const saque of saquesValidos) {
  console.log(saque.toFixed(2))
}
console.log("-".repeat(40))               
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0)
console.log(`Total dos Saques: R$ ${totalSacado.toFixed(2)}`)

const saquesInvalidos = saques.length - saquesValidos.length
console.log(`\nNº de Tentativas de Saques (saques inválidos): ${saquesInvalidos}`)