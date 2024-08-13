const formu = document.querySelector("form");
const resp  = document.querySelector("pre");
formu.addEventListener("submit", (e) => { 
e.preventDefault()
const numero = Number(formu.inNumero.value)
let resposta = ""
for(let i = 1; i <= 10; i++){
resposta = resposta + numero + " x " + i +" = "+ (numero * i) + "\n";
}
resp.innerText = resposta;
})