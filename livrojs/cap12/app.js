// Importa o módulo Express, que é um framework para criar servidores web no Node.js
const express = require('express');

// Cria uma instância do Express, que será usada para configurar e rodar o servidor
const app = express();

// Define a porta onde o servidor irá escutar as requisições
const port = 3001;

// Middleware para permitir que o Express faça o parsing (análise) de JSON no corpo das requisições
app.use(express.json());

// Configura uma rota GET para a URL raiz ('/')
// Quando um usuário acessar a URL principal do servidor, a resposta será "Olá... Bem-vindo!"
app.get('/', (req, res) => {
    res.send("Olá... Bem-vindo!");
});

// Configura uma rota POST para a URL '/filmes'
// Essa rota recebe dados do corpo da requisição e responde com uma mensagem formatada
app.post('/filmes', (req, res) => {
    // Extrai os campos 'titulo' e 'genero' do corpo da requisição (JSON enviado pelo cliente)
    const { titulo, genero } = req.body;

    // Retorna uma resposta ao cliente informando que o filme foi recebido
    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`);
});

// Middleware de logging que registra a data e hora da requisição
const log = (req, res, next) => {
    console.log(`.................. Acessado em ${new Date()}`); // Exibe no console a data e hora exata da requisição
    next(); // Passa a execução para o próximo middleware ou rota
}

// Configura uma rota GET para "/transfere", utilizando o middleware 'log' antes de responder
app.get("/transfere", log, (req, res) => {
    res.send("Ok! Valor transferido com sucesso!");
});

// Importa o arquivo de rotas "livros.js" que gerencia as operações relacionadas a livros
const livros = require("./livros");

// Define um prefixo "/livros" para todas as rotas dentro do módulo "livros.js"
app.use("/livros", livros);

// Inicia o servidor para escutar na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
