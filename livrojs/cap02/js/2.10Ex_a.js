const formu = document.querySelector("form");
const remedio = document.querySelector("#Promo");
const valor = document.querySelector("#Preco");
formu.addEventListener("submit", (e) => {
    const medicamento = formu.inMedicamento.value;
    const pagamento = Number(formu.inPreco.value);
    const promo = Math.floor(pagamento*2);
    remedio.innerText = 'Promoção de ' + medicamento;
    valor.innerText = 'R$' + promo;
    e.preventDefault();
})
