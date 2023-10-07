const frm = document.querySelector("form") // obtém elementos da página
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // declara vetor global

frm.addEventListener("submit", (e) => {
  e.preventDefault() // evita envio do form
  const nome = frm.inPaciente.value // obtém nome do paciente
  pacientes.push(nome) // adiciona o nome no final do vetor
  let lista = "" // string para concatenar pacientes
  // for "tradicional" (inicia em 0, enquanto menor que tamanho do array)
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`
  }
  respLista.innerText = lista // exibe a lista de pacientes na página
  frm.inPaciente.value = "" // limpa conteúdo do campo de formulário
  frm.inPaciente.focus() // posiciona o cursor no campo
})

// Adiciona um "ouvinte" para o evento click no btUrgencia que está no form
frm.btUrgencia.addEventListener("click", () => {
  // verifica se as validações do form estão ok (no caso, paciente is required)
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência")
    frm.inPaciente.focus() // posiciona o cursor no campo
    return // retorna ao form
  }
  const nome = frm.inPaciente.value // obtém nome do paciente
  pacientes.unshift(nome) // adiciona paciente no início do vetor
  let lista = "" // string para concatenar pacientes
  // forEach aplicado sobre o array pacientes
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
  respLista.innerText = lista // exibe a lista de pacientes na página
  frm.inPaciente.value = "" // limpa conteúdo do campo de formulário
  frm.inPaciente.focus() // posiciona o cursor no campo
})

frm.btAtender.addEventListener("click", () => {
  // se o tamanho do vetor = 0
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera")
    frm.inPaciente.focus()
    return
  }
  const atender = pacientes.shift() // remove do início da fila (e obtém nome)
  respNome.innerText = atender // exibe o nome do paciente em atendimento
  let lista = "" // string para concatenar pacientes
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
  respLista.innerText = lista // exibe a lista de pacientes na página
})
