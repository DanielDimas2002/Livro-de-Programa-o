/**
 * Seed para popular a tabela "livros" com dados fictícios.
 * 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Primeiro, remove todos os registros da tabela "livros" para evitar duplicatas
  return knex("livros").del()
    .then(function () {
      // Insere novos registros na tabela "livros"
      return knex("livros").insert([
        {
          titulo: "O Mistério da Noite",
          autor: "Alice Ribeiro",
          ano: 2021,
          preco: 39.90,
          foto: "misterio_noite.jpg"
        },
        {
          titulo: "As Crônicas do Fogo",
          autor: "Carlos Mendes",
          ano: 2018,
          preco: 49.99,
          foto: "cronicas_fogo.jpg"
        },
        {
          titulo: "O Último Guardião",
          autor: "Fernanda Souza",
          ano: 2023,
          preco: 59.50,
          foto: "ultimo_guardiao.jpg"
        },
        {
          titulo: "Viagem ao Centro do Pensamento",
          autor: "Lucas Oliveira",
          ano: 2020,
          preco: 29.90,
          foto: "viagem_pensamento.jpg"
        },
        {
          titulo: "A Lenda dos Sonhos Perdidos",
          autor: "Mariana Castro",
          ano: 2019,
          preco: 34.75,
          foto: "lenda_sonhos.jpg"
        }
      ]);
    });
};
