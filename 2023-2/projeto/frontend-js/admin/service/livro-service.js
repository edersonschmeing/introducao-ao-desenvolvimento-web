
const listaLivros = () =>  {
    return fetch(`http://localhost:3001/livros`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const criaLivro = (livro) => { 
    return fetch(`http://localhost:3001/livros`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        //body: JSON.stringify(livro)
        body: JSON.stringify({
            titulo: livro.titulo,
            autor: livro.autor,
            foto: livro.foto,
            ano: livro.ano,
            preco: livro.preco,            
        }) 
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeLivro = (id) => { 
    return fetch(`http://localhost:3001/livros/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(resposta.ok){
           return resposta.json()
        }else{
           throw new Error('Não foi possível deletar um cliente')
        }
    })
}
 
const detalhaLivro = (id) => { 
    return fetch(`http://localhost:3001/livros/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}

const atualizaLivro = (livro) => {
    return fetch(`http://localhost:3001/livros/${livro.id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
         //body: JSON.stringify(livro)
         body: JSON.stringify({
            titulo: livro.titulo,
            autor: livro.autor,
            foto: livro.foto,
            ano: livro.ano,
            preco: livro.preco,            
        }) 
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
            //return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}


export const livroService = { 
    listaLivros,
    criaLivro, 
    removeLivro,
    detalhaLivro,
    atualizaLivro
}