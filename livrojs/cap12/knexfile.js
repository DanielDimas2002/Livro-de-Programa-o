/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3', // Define o SQLite como banco de dados
    connection: {
      filename: './data/editora.db3' // Caminho do arquivo do banco SQLite
    },
    useNullAsDefault: true, // Evita warnings sobre valores padrão em colunas
    pool: { min: 1, max: 1 }, // Limita para 1 conexão (recomendado para SQLite)
    migrations: {
      directory: './data/migrations' // Diretório correto para migrations
    },
    seeds: {
      directory: './data/seeds' // Diretório onde ficam os arquivos de seed (dados iniciais)
    }
  }

};
