const formu = document.querySelector("form");
const saida1 = document.querySelector("#ValorUnitário");
const saida2 = document.querySelector("#ValorPromo");
formu.addEventListener("submit", (e) => {
    const produt = formu.inProduto.value;
    const valoruni = Number(formu.inValor.value);
    const NovoValor = (valoruni * 0.5) + (valoruni*2);
    const TerceiroProd = (valoruni * 0.5);
    saida1.innerText = produt + ' - Promoção - leve 3 por R$' + NovoValor;
    saida2.innerText = 'O terceiro produto sairá por R$' + TerceiroProd;
    e.preventDefault()
});