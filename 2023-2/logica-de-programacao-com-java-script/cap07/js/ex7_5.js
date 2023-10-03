const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()                           // evita envio do form
  const funcionario = frm.inFuncionario.value  // obtém nome do funcionário

  // divide o nome em itens de vetor, criados a cada ocorrência do espaço
  const partes = funcionario.split(" ")
  let email = ""                              // vai concatenar letras
  const tam = partes.length                   // obtém nº de itens do vetor partes

  for (let i = 0; i < tam - 1; i++) {   // percorre itens do vetor (exceto o último)
    email += partes[i].charAt(0)        // e obtém a letra inicial de cada item
  }

  // concatena as letras iniciais com a última parte (sobrenome) e empresa
  email += partes[tam - 1] + "@empresa.com.br"

  resp.innerText = `E-mail: ${email.toLowerCase()}`   // exibe e-mail em minúsculas
})
