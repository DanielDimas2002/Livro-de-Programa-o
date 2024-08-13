const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const funcionario = frm.inFuncionario.value

    const partes = funcionario.split(" ")
    let email = "" // vai concatenar letras
    const tam = partes.length //obtém número de itens do vetor partes

    for(let i = 0; i< tam - 1; i++){ //percorre itens do vetor (exceto o último)
        email += partes[i].charAt(0) //e obtém a letra inicial de cada item
    }
    //concatena as letras iniciais com a última parte (sobrenome) e empresas
    email += partes[tam - 1] + "@empresa.com.br"
    resp.innerText = "E-mail: " + email.toLocaleLowerCase() //exibe e-mail em minúsculas
})