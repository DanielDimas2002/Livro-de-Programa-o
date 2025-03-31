// Importa o Express para criar um roteador separado
const express = require("express");

// Cria um roteador para definir as rotas de "livros"
const router = express.Router();

// Importa a configuração do banco de dados usando Knex.js
const dbKnex = require("./data/db_config");

/**
 * ROTA GET - LISTAR TODOS OS LIVROS
 * Retorna uma lista de todos os livros cadastrados no banco de dados.
 */
router.get("/", async (req, res) => {
    try {
        // Busca todos os livros na tabela "livros" ordenados por ID de forma decrescente
        const livros = await dbKnex("livros").orderBy("id", "desc");

        // Retorna os livros em formato JSON com código HTTP 200 (sucesso)
        res.status(200).json(livros);
    } catch (erro) {
        // Em caso de erro, retorna um status 400 e a mensagem do erro
        res.status(400).json({ msg: erro.message });
    }
});

/**
 * ROTA POST - ADICIONAR UM NOVO LIVRO
 * Recebe os dados do novo livro e adiciona ao banco de dados.
 */
router.post("/", async (req, res) => {
    // Extrai os dados do corpo da requisição
    const { titulo, autor, ano, preco, foto } = req.body;

    // Verifica se todos os campos obrigatórios foram enviados
    if (!titulo || !autor || !ano || !preco || !foto) {
        res.status(400).json({ msg: "Enviar título, autor, ano, preço e foto do livro" });
        return; // Interrompe a execução para evitar erros
    }

    try {
        // Insere o novo livro no banco de dados e retorna o ID gerado
        const novo = await dbKnex("livros").insert({ titulo, autor, ano, preco, foto });

        // Retorna o ID do novo livro cadastrado com status HTTP 201 (Criado)
        res.status(201).json({ id: novo[0] });
    } catch (error) {
        // Em caso de erro, retorna status 400 e a mensagem do erro
        res.status(400).json({ msg: error.message });
    }
});

/**
 * ROTA PUT - ATUALIZAR O PREÇO DE UM LIVRO ESPECÍFICO
 * Recebe um ID e um novo preço e atualiza o livro correspondente.
 */
router.put("/:id", async (req, res) => {
    // Obtém o ID do livro a ser atualizado a partir dos parâmetros da URL
    const id = req.params.id;

    // Extrai o novo preço do corpo da requisição
    const { preco } = req.body;

    try {
        // Atualiza o preço do livro no banco de dados
        await dbKnex("livros").update({ preco }).where("id", id);

        // Retorna status 200 (Sucesso) sem conteúdo
        res.status(200).json();
    } catch (error) {
        // Em caso de erro, retorna status 400 e a mensagem do erro
        res.status(400).json({ msg: error.message });
    }
});

/**
 * ROTA DELETE - REMOVER UM LIVRO
 * Remove um livro do banco de dados com base no ID fornecido.
 */
router.delete("/:id", async (req, res) => {
    // Obtém o ID do livro a ser excluído a partir dos parâmetros da URL
    const { id } = req.params;

    try {
        // Exclui o livro da tabela "livros"
        await dbKnex("livros").del().where({ id });

        // Retorna status 200 (Sucesso) sem conteúdo
        res.status(200).json();
    } catch (error) {
        // Em caso de erro, retorna status 400 e a mensagem do erro
        res.status(400).json({ msg: error.message });
    }
});





// Exporta o roteador para ser utilizado no servidor principal
module.exports = router;
