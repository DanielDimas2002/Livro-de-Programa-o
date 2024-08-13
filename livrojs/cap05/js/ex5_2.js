const formu = document.querySelector("form");
const saida = document.querySelector("pre");
formu.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(formu.inNumero.value)
    let resposta = "Entre " + numero + " e 1: "
    for(let i = numero; i > 1; i--){
        resposta =  resposta + i + ", "
    }
    resposta = resposta + "1."
    saida.innerText = resposta;
})