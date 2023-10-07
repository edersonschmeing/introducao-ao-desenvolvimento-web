/*
 A function contarVisitas é o acréscimo do exercício (ao exemplo inicial do capítulo)
*/ 

// Usamos querySelectorAll() e indicamos o elemento [1], pois querySelectorAll() retorna um array
// e queremos criar referência ao segundo h5 da página (lembre-se que arrays iniciam em 0)
const resp = document.querySelectorAll("h5")[1]

const contarVisitas = () => {

  let contador = 0

  if (localStorage.getItem("lojaContador")) {
    contador = Number(localStorage.getItem("lojaContador"))
  }

  contador++

  if (contador == 1) {
    resp.innerText = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site."
  } else {
    resp.innerText = `Que bom que você voltou! Esta é a sua visita de número ${contador} ao nosso site.`
  }

  localStorage.setItem("lojaContador", contador)
}

/* 
  É necessário manter as demais funções da página para o correto funcionamento das trocas de clube, bem como,
  para carregar a página com as cores e símbolo do clube salvo em localStorage

  A função contarVisitas é chamada em verificarClube()
*/

const inRadios = document.querySelectorAll("input") // captura tags input da página
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
  const clubes = ["Brasil", "Pelotas", "Farroupilha"] // vetor com a lista de clubes

  let selecao
  // percorre os inRadios para verificar qual está selecionado
  for (let i = 0; i < inRadios.length; i++) {
    if (inRadios[i].checked) {
      selecao = i        // se selecionado, armazena índice do radio selecionado
      break              // e sai da repetição
    }
  }

  if (selecao <= 2) {        // se selecao <= 2, então torce por algum clube
    dvTitulo.className = `row cores-${clubes[selecao]}` // modifica a cor
    // muda a propriedade src com a imagem do clube selecionado
    imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
    imClube.className = "img-fluid"                // muda estilo para exibir imagem
    imClube.alt = `Símbolo do ${clubes[selecao]}`  // texto alternativo
    localStorage.setItem("clube", clubes[selecao]) // salva nome do clube
  } else {                            // else (selecionou "Nenhum")
    dvTitulo.className = "row"        // tira a classe de cor de divTitulo
    imClube.className = "d-none"      // oculta a imagem
    imClube.alt = ""                  // limpa texto alternativo
    localStorage.removeItem("clube")  // remove variável do localStorage
  }
}

// percorre os elementos para associar function ao evento change
for (const inRadio of inRadios) {
  inRadio.addEventListener("change", trocarClube)
}

const verificarClube = () => {
  if (localStorage.getItem("clube")) {           // se já estiver salvo algum clube 
    const clube = localStorage.getItem("clube")  // obtém o nome do clube

    // conforme o clube, marca um dos elementos do input type radio
    if (clube == "Brasil") {
      inRadios[0].checked = true
    } else if (clube == "Pelotas") {
      inRadios[1].checked = true
    } else {
      inRadios[2].checked = true
    }
    trocarClube() // chama a function que troca a imagem e cores
  }

  contarVisitas()    // chama function com a mensagem do contador

}
// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)
