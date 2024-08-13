const frm = document.querySelector("form") // Seleciona o formulário
const tbFilmes = document.querySelector("table") // Seleciona a tabela de filmes

// Evento de envio do formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Impede o comportamento padrão de envio do formulário

    const titulo = frm.inTitulo.value // Obtém o valor do campo de título do filme
    const genero = frm.inGenero.value // Obtém o valor do campo de gênero do filme

    inserirLinha(titulo, genero) // Chama a função para inserir uma nova linha na tabela
    gravarFilme(titulo, genero) // Chama a função para gravar o filme no armazenamento local

    frm.reset() // Limpa o formulário
    frm.inTitulo.focus() // Coloca o foco no campo de título do filme
})

// Função para inserir uma nova linha na tabela de filmes
const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1) // Insere uma nova linha no final da tabela

    // Insere as células da linha com os valores do título e do gênero do filme
    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo // Define o texto da primeira célula como o título do filme
    col2.innerText = genero // Define o texto da segunda célula como o gênero do filme
    col3.innerHTML = "<i class = 'exclui' title = 'Excluir'>&#10008</i>" // Insere um ícone de exclusão na terceira célula
}

// Função para gravar o filme no armazenamento local
const gravarFilme = (titulo, genero) => {
    if (localStorage.getItem("filmesTitulo")) { // Verifica se já existem filmes gravados
        // Se já existirem filmes, concatena o novo título e gênero aos filmes existentes
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero
        localStorage.setItem("filmesTitulo", filmesTitulo) // Armazena os títulos dos filmes
        localStorage.setItem("filmesGenero", filmesGenero) // Armazena os gêneros dos filmes
    } else {
        // Se não existirem filmes, armazena o título e gênero do novo filme
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
}

// Evento de carregamento da página
window.addEventListener("load", () => {
    if (localStorage.getItem("filmesTitulo")) { // Verifica se há filmes gravados no armazenamento local
        const titulo = localStorage.getItem("filmesTitulo").split(";") // Obtém os títulos dos filmes
        const genero = localStorage.getItem("filmesGenero").split(";") // Obtém os gêneros dos filmes

        // Para cada filme gravado, insere uma linha na tabela
        for (let i = 0; i < titulo.length; i++) {
            inserirLinha(titulo[i], genero[i])
        }
    }
})

// Evento de clique na tabela de filmes
tbFilmes.addEventListener("click", (e) => {
    if (e.target.classList.contains("exclui")) { // Verifica se o elemento clicado é o ícone de exclusão
        const titulo = e.target.parentElement.children[0].innerText // Obtém o título do filme a ser excluído

        if (confirm('Confirma a exclusão do filme ' + titulo + "?")) { // Pergunta ao usuário se ele confirma a exclusão do filme
            e.target.parentElement.parentElement.remove() // Remove a linha da tabela
            localStorage.removeItem("filmesTitulo") // Remove os filmes do armazenamento local
            localStorage.removeItem("filmesGenero")

            // Para cada linha restante na tabela, grava novamente os filmes no armazenamento local
            for (let i = 0; i < tbFilmes.rows.length; i++) {
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText
                const auxGenero = tbFilmes.rows[i].cells[1].innerText
                gravarFilme(auxTitulo, auxGenero)
            }
        }
    }
})
