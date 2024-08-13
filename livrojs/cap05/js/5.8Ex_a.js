const formu = document.querySelector("form")
const resp = document.querySelector("h3")
formu.addEventListener("submit", (e) => {
    e.preventDefault()
    const frutas = formu.inFruta.value
    const num = Number(formu.inNumber.value)
    let palavra = ""
    for(let i = 1; i <= num*2 - 1; i++){
        if(i % 2 == 1){
            palavra = palavra + frutas
        }else{
            palavra = palavra + "*" 
        }
    }
    resp.innerText = palavra
})