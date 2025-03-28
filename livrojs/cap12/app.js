// Importa o módulo Express, que é um framework para criar servidores web no Node.js
const express = require('express');

// Cria uma instância do Express, que será usada para configurar e rodar o servidor
const app = express();

// Define a porta onde o servidor irá escutar as requisições
const port = 3001;

// Configura uma rota GET para o caminho raiz ('/')
// Quando um usuário acessar a URL principal do servidor, a resposta será "Olá... Bem-vindo!"
app.get('/', (req, res) => {
    // Envia uma resposta simples de texto para o cliente
    res.send("Olá... Bem-vindo!");
});

// Inicia o servidor para escutar na porta definida
app.listen(port, () => {
    // Exibe uma mensagem no console indicando que o servidor está rodando e acessível
    console.log(`Servidor rodando em http://localhost:${port}`);
});
