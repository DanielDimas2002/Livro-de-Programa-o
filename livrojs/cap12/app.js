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

// Middleware para permitir que o Express faça o parsing (análise) de JSON no corpo das requisições
app.use(express.json());

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
    // Exibe no console a data e hora exata em que a rota foi acessada
    console.log(`.................. Acessado em ${new Date()}`);

    // Chama a próxima função na cadeia de middlewares (ou o handler da rota)
    next();
}

// Configura uma rota GET para "/transfere"
// Essa rota utiliza o middleware 'log' antes de responder à requisição
app.get("/transfere", log, (req, res) => {
    // Responde ao cliente confirmando a transferência
    res.send("Ok! Valor transferido com sucesso!");
});

// Inicia o servidor para escutar na porta definida
app.listen(port, () => {
    // Exibe uma mensagem no console indicando que o servidor está rodando e acessível
    console.log(`Servidor rodando em http://localhost:${port}`);
});
