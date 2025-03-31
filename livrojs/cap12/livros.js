// Importa o Express para criar um roteador separado
const express = require("express");

// Cria um roteador para definir as rotas de "livros"
const router = express.Router();

// Importa o CORS para permitir requisições de diferentes origens
const cors = require("cors");
router.use(cors());

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
    } catch (error) {
        // Em caso de erro, retorna um status 400 e a mensagem do erro
        res.status(400).json({ msg: error.message });
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

/**
 * ROTA GET - FILTRAR LIVROS POR PALAVRA-CHAVE
 * Retorna uma lista de livros que contenham a palavra-chave no título ou no nome do autor.
 */
router.get("/filtro/:palavra", async (req, res) => {
    // Obtém a palavra-chave dos parâmetros da URL
    const palavra = req.params.palavra;
    
    try {
        // Busca os livros cujo título ou autor contenham a palavra-chave
        const livros = await dbKnex("livros")
            .where("titulo", "like", `%${palavra}%`)
            .orWhere("autor", "like", `%${palavra}%`);

        // Retorna a lista de livros encontrados
        res.status(200).json(livros);
    } catch (error) {
        // Em caso de erro, retorna status 400 e a mensagem do erro
        res.status(400).json({ msg: error.message });
    }
});

/**
 * ROTA GET - RESUMO DOS DADOS DA TABELA
 * Retorna um resumo com o número total de livros, soma total dos preços,
 * maior preço encontrado e média dos preços.
 */
router.get("/dados/resumo", async (req, res) => {
    try {
        // Realiza uma consulta agregada na tabela de livros
        const consulta = await dbKnex("livros")
            .count({ num: "*" }) // Conta o número total de livros
            .sum({ soma: "preco" }) // Soma os preços de todos os livros
            .max({ maior: "preco" }) // Encontra o maior preço
            .avg({ media: "preco" }); // Calcula a média dos preços

        // Extrai os dados do resultado da consulta
        const { num, soma, maior, media } = consulta[0];

        // Retorna os dados formatados, com a média arredondada para duas casas decimais
        res.status(200).json({ num, soma, maior, media: Number(media.toFixed(2)) });
    } catch (error) {
        // Em caso de erro, retorna status 400 e a mensagem do erro
        res.status(400).json({ msg: error.message });
    }
});

/**
 * ROTA GET - OBTÉM DADOS PARA GRÁFICO DE PREÇOS POR ANO
 * Retorna uma soma total dos preços dos livros agrupados por ano.
 */
router.get("/dados/grafico", async (req, res) => {
    try {
        // Consulta que agrupa os preços dos livros por ano
        const totalPorAno = await dbKnex("livros")
            .select("ano") // Seleciona o ano do livro
            .sum({ total: "preco" }) // Soma os preços agrupados por ano
            .groupBy("ano"); // Agrupa os resultados por ano

        // Retorna os dados em formato JSON
        res.status(200).json(totalPorAno);
    } catch (error) {
        // Em caso de erro, retorna status 400 e a mensagem do erro
        res.status(400).json({ msg: error.message });
    }
});

// Exporta o roteador para ser utilizado no servidor principal
module.exports = router;
