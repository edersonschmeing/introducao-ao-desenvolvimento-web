const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {    // "escuta" evento submit do form
  e.preventDefault() // evita envio do form

  const fruta = frm.inFruta.value   // obtém dados do form
  const num = Number(frm.inNumero.value)

  // variável que vai acumular o número repetido das frutas
  let resposta = ""

  // cria uma repetição e...
  for (let i = 1; i < num; i++) {
    // ... a cada volta, adiciona uma fruta e o " * "
    resposta = resposta + fruta + " * "
  }

  // a última fruta é acrescentada, sem o * no final
  resp.innerText = resposta + fruta
})
