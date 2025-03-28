/**
 * Função responsável por criar a tabela "livros" no banco de dados.
 * 
 * @param { import("knex").Knex } knex - Instância do Knex para manipulação do banco de dados.
 * @returns { Promise<void> } - Retorna uma Promise que indica a conclusão da operação.
 */
exports.up = function (knex) {
    return knex.schema.createTable("livros", (table) => {
        // Cria uma coluna "id" como chave primária com autoincremento.
        table.increments();

        // Cria uma coluna "titulo" do tipo STRING com limite de 80 caracteres. Não pode ser nula.
        table.string("titulo", 80).notNullable();

        // Cria uma coluna "autor" do tipo STRING com limite de 60 caracteres. Não pode ser nula.
        table.string("autor", 60).notNullable();

        // Cria uma coluna "ano" do tipo INTEGER para armazenar o ano de publicação. Não pode ser nula.
        table.integer("ano", 4).notNullable();

        // Cria uma coluna "preco" do tipo DECIMAL com 9 dígitos no total e 2 casas decimais. Não pode ser nula.
        table.decimal("preco", 9, 2).notNullable();

        // Cria uma coluna "foto" do tipo STRING com limite de 100 caracteres para armazenar o caminho da imagem do livro. Não pode ser nula.
        table.string("foto", 100).notNullable();
    });
};

/**
 * Função responsável por desfazer a criação da tabela "livros".
 * 
 * @param { import("knex").Knex } knex - Instância do Knex para manipulação do banco de dados.
 * @returns { Promise<void> } - Retorna uma Promise que indica a conclusão da operação.
 */
exports.down = function (knex) {
    // Remove a tabela "livros" do banco de dados caso a migration seja revertida.
    return knex.schema.dropTable("livros");
};
