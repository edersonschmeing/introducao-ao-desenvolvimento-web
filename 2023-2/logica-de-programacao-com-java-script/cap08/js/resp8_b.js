const frm = document.querySelector("form")      // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()                     // evita envio do form
  const aluno = frm.inAluno.value

  // o retorno de validarNome é utilizado no if
  if (!validarNome(aluno)) {
    alert("Informe o nome completo do aluno")
    frm.inAluno.focus()
    return
  }

  // o retorno das funções é utilizado na exibição da resposta
  resp.innerText = "Senha Inicial: " + obterSobrenome(aluno) + contarVogais(aluno)
})

// forma "tradicional"
// const validarNome = nome => {
//   // se houver espaço no nome...
//   if (nome.includes(" ")) {
//     return true                   // ... retorna true
//   } else {
//     return false
//   }
// }

// forma simplificada
// observe que não é necessário o return
const validarNome = nome => nome.includes(" ")

const obterSobrenome = nome => {
  const ultimoEspaco = nome.lastIndexOf(" ")
  return nome.substr(ultimoEspaco + 1).toLowerCase()
}

const contarVogais = nome => {
  let num = 0
  for (const letra of nome) {
    const letraUC = letra.toUpperCase()
    if (letraUC == "A" || letraUC == "E" || letraUC == "I" || letraUC == "O" || letraUC == "U") {
      num++
    }
  }
  return num < 10 ? "0" + num : num
}

// outra forma de programar a função contarVogais()
const contarVogais2 = nome => {
  let num = 0
  const vogais = "AEIOU"
  for (const letra of nome) {
    const letraUC = letra.toUpperCase()
    if (vogais.includes(letraUC)) {
      num++
    }
  }
  return num < 10 ? "0" + num : num
}