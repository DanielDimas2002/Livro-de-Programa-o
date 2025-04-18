const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const tarefa = frm.inTarefa.value

    const h5 = document.createElement("h5") //cria o elemento
    const texto = document.createTextNode(tarefa) //cria um texto
    h5.appendChild(texto) //define que "texto" será filho de h5
    dvQuadro.appendChild(h5) //e que h5 será filho de divQuadro

    frm.inTarefa.value = "" //limpa o campo de edições
    frm.inTarefa.focus() //joga o cursor neste campo
})

frm.btnSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") // obtém tags h5 da página

    if (tarefas.length == 0) {
        alert("Não há tarefas para selecionar") // se não há tarefas para selecionar
        return
    }

    let aux = -1 //variável auxiliar para indicar linha selecionada

    //Percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i = 0; i < tarefas.length; i++) {
        //se a tag é da tarefa-selecionada(esta selecionada)
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal" //troca para normal
            aux = i //muda valor da variável auxiliar
            break //sai do loop
        }
    }

    //se a linha que está selecionada é a última, irá voltar para a primeira

    if (aux == tarefas.length - 1) {
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada" //muda estilo da próxima linha
})

frm.btnRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") //obtém tags h5 da página

    let aux = -1 //variável auxiliar para indicar a linha selecionada

    //percorre a lista das tarefas inseridas na página (elementos h5)

    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") { //se é da classe tarefa selecionada
            aux = i // muda valor da variável aux
        }
    })

    if (aux == -1) { //se não há tarefa selecionada(ou se a lista está vazia)
        alert("Selecione uma tarefa para removê-la...")
        return
    }

    //solicita confirmação (exibindo o conteúdo da tag 5 selecionada)

    if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux]) // remove um dos filhos de divQuadro
    }
})

frm.btnGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5"); //obtém tags h5 da página

    if (tarefas.length == 0) {
        alert("Não há tarefas para serem salvas"); //se não há tarefas, exibe o alerta
        return;
    }

    let dados = ""; // irá "acumular" os dados a serem salvos
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";"; //acumula conteúdo de cada h5
    });

    //grava os dados em localStorage, removendo o último ";"
    localStorage.setItem("tarefasDia", dados.slice(0, -1));

    //confere se os dados foram armazenados em localStorage
    if (localStorage.getItem("tarefasDia")) {
        alert("Ok! Tarefas Salvas");
    }
});

window.addEventListener("load", () => {
    //verifica se há tarefas salvas no navegador do usuário
    if (localStorage.getItem("tarefasDia")) {
        //cria um vetor com a lista de tarefas(separadas pelo split(";"))
        const dados = localStorage.getItem("tarefasDia").split(";");

        //percorre os dados armazenados em LocalStorage
        dados.forEach(dado => {
            const h5 = document.createElement("h5"); //cria o elemento HTML5
            const texto = document.createTextNode(dado); //cria o texto
            h5.appendChild(texto); //define que texto será filho de h5
            dvQuadro.appendChild(h5); //e que h5 será filho de divQuadro
        });
    }
});