const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Olá... Bem-vindo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/app-express', (req, res) => {
    res.send('<h2>App: Back-end com Express</h2>');
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

