const formu = document.querySelector("form")
const saida = document.querySelector("h3")

formu.addEventListener("submit", (e) =>{
    e.preventDefault()
    const palavra = formu.inFrase.value.toUpperCase()
    const tamanho_palavra = palavra.length
    let palavra_inversa = ""
    let resposta = ""
    
    for(let i = tamanho_palavra; i >=0; i--){
        palavra_inversa += palavra.charAt(i)
    }

    if(palavra == palavra_inversa){
        resposta = "Sim! " + palavra_inversa + " é um Políndromo."
    }else{
        resposta = "Não " + palavra_inversa + " não é um Políndromo."
    }

    saida.innerText = resposta

})