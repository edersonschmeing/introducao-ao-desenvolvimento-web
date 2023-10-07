const frm = document.querySelector("form") // obtém elementos da página
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")

frm.addEventListener("submit", (e) => {
  e.preventDefault() // evita envio do form

  const valor = Number(frm.inValor.value) // obtém número digitado no form

  // caso valor insuficiente
  if (valor < 1.00) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)")
    frm.inValor.focus()
    return
  }

  // declara variáveis
  let tempo
  let troco

  // cria as condições para verificar tempo e troco
  if (valor >= 3.00) {
    tempo = 120
    troco = valor - 3.00
  } else if (valor >= 1.75) {
    tempo = 60
    troco = valor - 1.75
  } else {
    tempo = 30
    troco = valor - 1.00
  }

  // exibe as respostas
  resp1.innerText = `Tempo: ${tempo} min`
  if (troco > 0) {
    resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
  }
})
