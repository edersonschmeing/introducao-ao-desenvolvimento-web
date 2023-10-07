const frm = document.querySelector("form") // obtém elementos da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()                     // evita envio do form

  const modelo = frm.inModelo.value      // obtém o conteúdo dos campos
  const ano = Number(frm.inAno.value)
  const preco = Number(frm.inPreco.value)

  const classificacao = classificarVeiculo(ano)         // chama funções e atribui
  const entrada = calcularEntrada(preco, classificacao) // ... retorno às variáveis

  const parcela = (preco - entrada) / 10        // usa retorno da função para cálculo

  resp1.innerText = modelo + " - " + classificacao       // exibe as respostas
  resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
  resp3.innerText = `+10x de R$: ${parcela.toFixed(2)}`
})

// função recebe o ano do veículo como parâmetro
const classificarVeiculo = (ano) => {
  const anoAtual = new Date().getFullYear()    // obtém o ano atual
  let classif
  if (ano == anoAtual) {           // condições para definir classificação do veículo
    classif = "Novo"
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classif = "Seminovo"
  } else {
    classif = "Usado"
  }
  return classif // retorna a classificação
}

// função recebe valor e status do veículo como parâmetro
const calcularEntrada = (valor, status) =>
  status == "Novo" ? valor * 0.5 : valor * 0.3