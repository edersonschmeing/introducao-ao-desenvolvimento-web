const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault() // evita envio do form

  // obtém e converte conteúdo dos campos de Velocidade
  const velPermitida = Number(frm.inVelPermitida.value)
  const velCondutor = Number(frm.inVelCondutor.value)

  // cria as condições para verificar situação do condutor
  if (velCondutor <= velPermitida) {
    resp.innerText = "Situação: Sem Multa"
  } else {
    const maisVinte = velPermitida * 1.2
    if (velCondutor <= maisVinte) {
      resp.innerText = "Situação: Multa Leve"
    } else {
      resp.innerText = "Situação: Multa Grave"
    }
  }
})
