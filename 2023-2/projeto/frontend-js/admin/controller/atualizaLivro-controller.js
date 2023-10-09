import { livroService } from '../service/livro-service.js'
import { livroModel } from '../model/livro-model.js'

(async () => { 
  
    const pegaURL = new URL(window.location)

    const id = pegaURL.searchParams.get('id')
    
    const inputTitulo = document.querySelector('[data-titulo]')
    const inputAutor = document.querySelector('[data-autor]')
    const inputFoto = document.querySelector('[data-foto]')
    const inputAno = document.querySelector('[data-ano]')
    const inputPreco = document.querySelector('[data-preco]')
    
    try {  

      const dados = await livroService.detalhaLivro(id) 
      let livro = dados[0]; //retorna um array de objeto, com um objeto. 
      //console.log(livro.titulo)
       
      inputTitulo.value = livro.titulo
      inputAutor.value = livro.autor
      inputFoto.value = livro.foto
      inputAno.value = livro.ano
      inputPreco.value = livro.preco 

    }
    catch(erro){
      console.log(erro)
      window.location.href="../view/erro.html"
    }

    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (evento)=> { 
      evento.preventDefault()
      try {
        console.log(" erro "+id)
        const livroEditado = new livroModel.Livro(id, 
                                                  inputTitulo.value,
                                                  inputAutor.value, 
                                                  inputFoto.value, 
                                                  inputAno.value, 
                                                  inputPreco.value );
        
        
        await livroService.atualizaLivro(livroEditado)
        window.location.href = "../view/edicao_concluida.html"
      }
      catch(erro){
        console.log(erro)
        window.location.href="../view/erro.html"
      }
    })
})()