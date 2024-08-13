const formu = document.querySelector("form");
const saida = document.querySelector("h3");
formu.addEventListener("submit", (e) => {
    e.preventDefault()
    const horaBR = Number(formu.inHoraBrasil.value)
    let horaFR = horaBR + 5;
    if (horaFR > 24) {
        horaFR = horaFR - 24;
    }
    saida.innerText = "Hora na França: " + horaFR.toFixed(2);
})