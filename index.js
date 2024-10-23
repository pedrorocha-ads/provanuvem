const express = require('express');
const app = express();
const port = 5500;

app.get('/', (req, res) => {
    res.send('<h1>Rota 1: Página Inicial</h1>');
});

app.get('/sobre', (req, res) => {
    res.send('<h1>Rota 2: Sobre Nós</h1>');
});

app.get('/contato', (req, res) => {
    res.send('<h1>Rota 3: Contato</h1>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
