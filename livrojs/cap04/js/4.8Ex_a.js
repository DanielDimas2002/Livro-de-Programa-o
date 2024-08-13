const formu = document.querySelector("form");
const saida = document.querySelector("h3");
formu.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(formu.inNumero.value);
    if (num % 2 == 0) {
        saida.innerText = num + " é par!"
    } else {
        saida.innerText = num + " é ímpar!"
    }
})
