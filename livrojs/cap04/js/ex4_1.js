const formu = document.querySelector("form");
const saidaNota = document.querySelector("h3");
const saidaSituacao = document.querySelector("h4");
formu.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = formu.inNome.value;
    const nota1 = Number(formu.inNota1.value);
    const nota2 = Number(formu.inNota2.value);
    const media = (nota1 + nota2) / 2;
    saidaNota.innerText = "Sua média, " + nome + ", foi: " + media.toFixed(2);
    if (media >= 7) {
        saidaSituacao.innerText = "Você foi aprovado! Parabéns.";
        saidaSituacao.style.color = "blue";
    } else if (media >= 4) {
        saidaSituacao.innerText = "Em análise";
        saidaSituacao.style.color = 'green'
    }else{
        saidaSituacao.innerText = "Infelizmente você foi reprovado";
        saidaSituacao.style.color = 'red'
    }

})