const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {    // "escuta" evento submit do form 
  e.preventDefault()                       // evita envio do form
  const num = Number(frm.inNumero.value)   // obtém número informado
  let estrelas = ""                        // variável que irá concatenar as estrelas
  for (let i = 1; i <= num; i++) {         // cria laço de repetição de 1 até num
    if (i % 2 == 1) {
      estrelas = estrelas + "*"        // na posição ímpar do i: *
    } else {
      estrelas = estrelas + "-"        // na posição par: -
    }
  }
  resp.innerText = estrelas            // exibe as estrelas  
})