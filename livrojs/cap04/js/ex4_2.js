const formu = document.querySelector("form");
const saida = document.querySelector("h3");
formu.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = formu.inNome.value;
    const altura = Number(formu.inAltura.value);
    const masculino = formu.inMasculino.checked;
    let peso;
    if (masculino) {
        peso = 22 * Math.pow(altura, 2);
    } else {
        peso = 21 * Math.pow(altura, 2);
    }
    saida.innerText = nome + ", seu peso ideal é: " + peso.toFixed(2) + "kg."
})
formu.addEventListener('reset', () =>{
    saida.innerText = "";
})