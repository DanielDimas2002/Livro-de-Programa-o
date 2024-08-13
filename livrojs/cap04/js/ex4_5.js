const formu = document.querySelector("form");
const saida = document.querySelector("h3");
formu.addEventListener("submit", (e) =>{
    e.preventDefault();
    const num = Number(formu.inNumero.value);
    const raiz = Math.sqrt(num);
    if(Number.isInteger(raiz)){
        saida.innerText = "Raiz: " + raiz;
    }else{
        saida.innerText = "Não há raiz exata para " + num;
    }
})