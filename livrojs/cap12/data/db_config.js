// Importa o módulo Knex.js, que é um query builder para bancos de dados SQL
const knex = require('knex');

// Importa a configuração do arquivo "knexfile.js"
const config = require("../knexfile.js");

// Cria uma instância do Knex usando as configurações do ambiente de desenvolvimento
const dbKnex = knex(config.development);

// Exporta a instância do banco de dados para ser usada em outras partes do projeto
module.exports = dbKnex;
