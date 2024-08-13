const frm = document.querySelector("form") //obtém elementos da página
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => { //"escuta" evento submit do form
    e.preventDefault() //evita o envio do form
    const fruta = frm.inFruta.value.toUpperCase() //conteúdo do campo em maiúsculas
    let resposta = "" //string que irá conter a resposta

    for (const letra of fruta){ //percorre todos os caracteres da fruta
        if(letra == fruta.charAt(0)){ //se a letra igual a letra inicial da string...
            resposta += fruta.charAt(0) //adiciona a letra inicial
        } else{ //se não, ...
            resposta += "_" //adiciona o sublinhado
        }
    }
    resp.innerText = resposta
    frm.inFruta.value = "*".repeat(fruta.length) // preenche com "*", conforme o tamanho
})  