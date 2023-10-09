import { livroModel } from '../model/livro-model.js'
import { livroService } from '../service/livro-service.js'

const criaNovaLinha = (livro) =>  { //passar o objeto 
  const linhaNovoLivro = document.createElement('tr')
  const conteudo = `
      <td class="td" data-td> ${livro.titulo}</td>
                  <td>${livro.autor}</td>
                  <td>${livro.ano}</td>
                  <td>${livro.preco}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../view/edita_livro.html?id=${livro.id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `
  linhaNovoLivro.innerHTML = conteudo
  linhaNovoLivro.dataset.id = livro.id
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
        //console.log(listaLivros[0])
        listaLivros.forEach(livro => {
            //console.log(livro)            
            /*let livro = new livroModel.Livro(elemento.id, 
                                             elemento.titulo, 
                                             elemento.autor,
                                             elemento.ano,
                                             elemento.preco)*/  
            tabela.appendChild(criaNovaLinha(livro)) // passar o objeto
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href="../view/erro.html"
    }
}

render()