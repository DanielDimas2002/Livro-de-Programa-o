const formu = document.querySelector("form");
const saida = document.querySelector("h3");
formu.addEventListener("submit", (e) => {
    const valor = Number(formu.inValor.value);
    const time = Number(formu.inTempo.value);
    const calc = (valor*time)/15;
    saida.innerText = 'Valor a pagar: R$' + calc;
    e.preventDefault();
});
