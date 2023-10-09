const criaNovaLinha = (id, titulo, autor) => {
    const linhaNovoLivro = document.createElement('tr')
    
    const conteudo = `
        <td class="td" data-td>${id}</td>
                    <td>${titulo}</td>
                    <td>${autor}</td>
       
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_livro.html" class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td> 
                    `
   
    linhaNovoLivro.innerHTML = conteudo
    return linhaNovoLivro
}

const tabela = document.querySelector('[data-tabela]')


const listaLivros = () => {
    return fetch(`http://localhost:3001/livros`)
    .then( resposta => { 
        console.log(resposta.json)
        return resposta.json()
    })
}

listaLivros()
.then(dados => {
        dados.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.id, elemento.titulo, elemento.autor))
})})
