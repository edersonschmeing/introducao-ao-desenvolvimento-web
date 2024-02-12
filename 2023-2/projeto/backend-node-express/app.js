//https://reqbin.com/
//https://insomnia.rest
//https://www.postman.com/

//https://babeljs.io/

const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    console.log(req.method);
    res.send('Olá... Bem-vindo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/app-editora', (req, res) => {
    res.send('<h2>App-Editora : Back-end com Express</h2>');
});

// para reconhecer os dados recebidos como sendo um objeto no formato JSON
app.use(express.json());

/*
{
    "titulo": "O jogo da Imitação",
    "genero": "Científico" 
}
*/ 

app.post('/filmes', (req, res) => {
    // const titulo = req.body.titulo;
    // const genero = req.body.genero;
    const { titulo, genero } = req.body;

    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`);

});

// Exemplo de Middleware
const log = (req, res, next) => {
    console.log(`${req.method}.... Acessado em ${new Date()}`);
    next();
}

app.get('/transfere', log, (req, res) => {
    res.send("Ok! Valor transferido com sucesso...");
});


// ---Arquivo com rotas para o cadastro de livros
const livros = require('./livros');

app.use('/livros', livros); // identificação da rota e da const (require) associada

