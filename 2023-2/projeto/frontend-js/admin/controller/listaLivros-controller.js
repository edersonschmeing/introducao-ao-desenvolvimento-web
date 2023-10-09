import { livroService } from '../service/livro-service.js'

const criaNovaLinha = (id, titulo, autor, ano, preco) =>  { //passar o objeto 
  const linhaNovoLivro = document.createElement('tr')
  const conteudo = `
      <td class="td" data-td> ${titulo}</td>
                  <td>${autor}</td>
                  <td>${ano}</td>
                  <td>${preco}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../view/edita_livro.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `
  linhaNovoLivro.innerHTML = conteudo
  linhaNovoLivro.dataset.id = id
  return linhaNovoLivro
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento)=> {
    let ehBotaoDeDeleta = evento.target.className === 'botao-simples botao-simples--excluir'
    if(ehBotaoDeDeleta){
        try {
            const linhaLivro = evento.target.closest('[data-id]')
            let id = linhaLivro.dataset.id
            await livroService.removeLivro(id)
            linhaLivro.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href="../view/erro.html"
        }
    }
})

const render = async () =>  {
    try {
        const listaLivros = await livroService.listaLivros()
        listaLivros.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.id, 
                                             elemento.titulo, 
                                             elemento.autor,
                                             elemento.ano,
                                             elemento.preco)) // passar o objeto
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href="../view/erro.html"
    }
}

render()