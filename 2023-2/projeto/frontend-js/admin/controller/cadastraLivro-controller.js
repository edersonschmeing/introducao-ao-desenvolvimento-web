import { livroService } from '../service/livro-service.js'
import { livroModel } from '../model/livro-model.js'


const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    
    const titulo = evento.target.querySelector('[data-titulo]').value
    const autor = evento.target.querySelector('[data-autor]').value
    const foto = evento.target.querySelector('[data-foto]').value
    const ano = evento.target.querySelector('[data-ano]').value
    const preco = evento.target.querySelector('[data-preco]').value

    let livro = new livroModel.Livro(0, titulo, autor, foto, ano, preco );
    //console.log(livro)

    await livroService.criaLivro(livro)
    window.location.href = '../view/cadastro_concluido.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../view/erro.html"
  }
})