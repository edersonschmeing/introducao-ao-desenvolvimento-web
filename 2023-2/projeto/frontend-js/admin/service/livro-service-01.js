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
    console.log(conteudo)
    
    linhaNovoLivro.innerHTML = conteudo
    return linhaNovoLivro
}

const tabela = document.querySelector('[data-tabela]')

//tabela.appendChild(criaNovaLinha(titulo, autor))

const http = new XMLHttpRequest()

http.open("GET", 'http://localhost:3001/livros')

http.send()

http.onload = () => {
    const dados = JSON.parse(http.response)
    //console.log(dados)
    dados.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.id, 
                                         elemento.titulo, 
                                         elemento.autor))
        
    }); 
}