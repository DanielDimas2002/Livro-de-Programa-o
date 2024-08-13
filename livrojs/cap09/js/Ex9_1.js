const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () =>{
    let clube // variével que irá receber o nome do clube

    if(frm.rbBrasil.checked) { // verifica qual radionbutton está selecionado
        clube = "Brasil"
    }else if(frm.rbPelotas.checked){
        clube = "Pelotas"
    }else{
        clube = "Farropilha"
    }


// define as classes de dvTitulo: row e cores do clube
dvTitulo.className = 'row cores-' + clube

localStorage.setItem("clube", clube) //salva no navegador a escolha do cliente
}

// associa ao evento change de cada botão do form a função trocarClube

frm.rbBrasil.addEventListener("change", trocarClube)
frm.rbPelotas.addEventListener("change", trocarClube)
frm.rbFarroupilha.addEventListener("change", trocarClube)

const verificaClube = () =>{
    if(localStorage.getItem("clube")){ //se já estiver salvo algum clube
        const clube = localStorage.getItem("clube") // obtém o nome do clube
        if(clube == "Brasil"){ // conforme o clube, marca chacked
            frm.rbBrasil.checked = true
        } else if(clube == "Pelotas"){
            frm.rbPelotas.checked = true
        } else{
            frm.rbFarroupilha.checked = true
        }
        trocarClube() // chama function que troca imagem e cores
    }
}
// se carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificaClube)