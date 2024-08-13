const inRadios = document.querySelectorAll("input"); // captura a tags inputs da página
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

// Declaração da função trocarClube
const trocarClube = () => {
    const clubes = ["Brasil", "Pelotas", "Farroupilha"]; // vetor com listas de clubes

    let selecao;
    // percorre os inRadios para verificar qual está selecionado
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i; // se selecionado, armazena índice do rádio selecionado
            break; // e sai da repetição
        }
    }

    if (selecao <= 2) { // se seleção <= 2, então torce para algum clube
        dvTitulo.className = `row cores-${clubes[selecao]}`; // modifica a cor
        // muda a propriedade scr com a imagem do clube selecionado
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
        imClube.className = "img-fluid"; // muda o estilo para exibir imagem
        imClube.alt = `Simbolo do ${clubes[selecao]}`; // texto alternativo
        localStorage.setItem("clube", clubes[selecao]); // salva nome do clube
    } else { // se selecionou "Nenhum"
        dvTitulo.className = "row"; // Tira a classe de cor de divTítulo
        imClube.className = "d-none"; // oculta a imagem
        imClube.alt = ""; // limpa texto alternativo
        localStorage.removeItem("clube"); // remove variável do localStorage
    }
};

// percorre os elementos para associar function ao evento change
for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube);
}

const verificarClube = () => {
    if (localStorage.getItem("clube")) { // se já estiver salvo algum clube
        const clube = localStorage.getItem("clube"); // obtém o nome do clube
        // conforme o clube, marca um dos elementos do input type radio
        if (clube == "Brasil") {
            inRadios[0].checked = true;
        } else if (clube == "Pelotas") {
            inRadios[1].checked = true;
        } else {
            inRadios[2].checked = true;
        }
        trocarClube(); // chama a função que troca a imagem e cores
    }
};

// ao carregar a página, verifica se o cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);
