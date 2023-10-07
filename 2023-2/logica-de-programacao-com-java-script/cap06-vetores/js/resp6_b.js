const frm = document.querySelector("form") // obtém elementos a serem manipulados
const resp1 = document.querySelector("#outLista")
const resp2 = document.querySelector("#outOrdem")

const numeros = []       // declara vetor global

frm.addEventListener("submit", (e) => {
  e.preventDefault()                           // evita envio do form
  const num = Number(frm.inNum.value)   // obtém número informado

  numeros.push(num)    // adiciona o num no final do vetor

  resp1.innerText = "Números: " + numeros.join(", ")

  // limpa mensagem (se já clicou em verificar...)
  resp2.innerText = ""

  // limpa campo e posiciona cursor em inNum
  frm.inNum.value = ""
  frm.inNum.focus()
})

frm.btVerificar.addEventListener("click", () => {
  // verifica se vetor numeros está vazio 
  if (numeros.length == 0) {
    alert("Não há números na lista...")
    inNum.focus()
    return
  }

  // flag indicativa
  let ordem = true

  // percorre os elementos do vetor (até penúltimo) 
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordem = false
      break
    }
  }

  // modifica conteúdo de outOrdem a partir de um operador ternário 
  resp2.innerText = ordem ? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente"
})