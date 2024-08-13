const formu = document.querySelector("form")
const listaNumeros = document.querySelector("span")
const respOrdem = document.querySelector("#inResposta")

const numeros = []

formu.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(formu.inAdicionar.value)
    if(numeros.includes(num)){
        alert("O número informado já foi adicionado. Tente outro.")
        return
        formu.inAdicionar.value = ""
    }
    numeros.push(num)
    let saida = numeros
    listaNumeros.innerText = saida
})

formu.btnOrdem.addEventListener("click" , () =>{
    let saida = ""
    if(numeros.length == 0){
        alert("Nenhum número foi informado.")
        return
    }
    if(numeros.length<2){
        alert("Informe pelo menos dois números para saber se os mesmos estão em ordem crescente ou não.")
    }else{
        const ordem = [...numeros]
        ordem.sort((a,b) => a - b)
            if(JSON.stringify(numeros) === JSON.stringify(ordem)){
                saida = "Os números estão em ordem crescente! \n" + numeros
            }else{
                saida = "Os números não estão em ordem crescente! \n" + numeros
            }
        }
        respOrdem.innerText = saida
})