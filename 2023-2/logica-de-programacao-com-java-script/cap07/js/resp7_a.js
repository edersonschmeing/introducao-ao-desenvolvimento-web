const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {          // "escuta" evento submit do form
  e.preventDefault()                             // evita envio do form
  const mensagem = frm.inMensagem.value          // conteúdo do campo

  let resposta = ""
  const tam = mensagem.length

  // laço para pegar as letras das posições pares (na programação, ímpares)
  for (let i = 1; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i)
  }

  // laço para pegar as letras das posições ímpares (na programação, pares)
  for (let i = 0; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i)
  }

  resp.innerText = resposta
})

frm.btDecript.addEventListener("click", () => {
  // verifica se as validações do form estão ok (no caso, mensagem is required)
  if (!frm.checkValidity()) {
    alert("Informe a mensagem criptografada")
    frm.inMensagem.focus() // posiciona o cursor no campo
    return // retorna ao form
  }
  const mensagem = frm.inMensagem.value          // conteúdo do campo

  const tam = mensagem.length
  const metade = Math.floor(tam / 2)
  let resposta = ""

  if (tam % 2 == 0) {
    for (let i = metade; i < tam; i++) {
      resposta += mensagem.charAt(i)
      resposta += mensagem.charAt(i - metade)
    }
  } else {
    for (let i = metade; i < tam - 1; i++) {
      resposta += mensagem.charAt(i)
      resposta += mensagem.charAt(i - metade)
    }
    resposta += mensagem.charAt(i)
  }

  resp.innerText = resposta
})