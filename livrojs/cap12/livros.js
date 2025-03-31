// Importa o Express para criar um roteador separado
const express = require("express");

// Cria um roteador para definir as rotas de "livros"
const router = express.Router();

// Importa a configuração do banco de dados usando Knex.js
const dbKnex = require("./data/db_config");

// Define uma rota GET para listar todos os livros ordenados pelo ID de forma decrescente
router.get("/", async (req, res) => {  
    try {
        // Busca todos os livros na tabela "livros" ordenados por ID de forma decrescente
        const livros = await dbKnex("livros").orderBy("id", "desc");

        // Retorna os livros em formato JSON com código HTTP 200 (sucesso)
        res.status(200).json(livros);
    } catch (erro) { 
        res.status(400).json({ msg: erro.message });
    }
});

// Exporta o roteador para ser utilizado no servidor principal
module.exports = router;
