const formu = document.querySelector("form")
const resp1 = document.querySelector("#primeiroAno")
const resp2 = document.querySelector("#outrosAnos")
formu.addEventListener("submit", (e) => {
    e.preventDefault()
    let numeroChinchilas = Number(formu.inChinchilas.value)
    const numerosAnos = Number(formu.inAnos.value)
    let resposta1 = "O número de chincilas em 1 ano é de: " + numeroChinchilas 
    let resposta2 = ""
    for(let i = 2; i <= numerosAnos; i++){
        numeroChinchilas = numeroChinchilas * 3
        resposta2 = resposta2 + "O número de chincilas em " + i + " anos é de: " + numeroChinchilas + "\n"
    }
    resp1.innerText = resposta1
    resp2.innerText = resposta2
})