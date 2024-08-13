const formu = document.querySelector("form")
const saida = document.querySelector("h3")

formu.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = formu.inNome.value.trim()
    const resp = numVogais(nome)
    const respsobre = resp2(nome)
    saida.innerText = "Senha Inicial: " + respsobre+ resp
})

const NomeCompleto = (nome) => {
    const possuiEspacos = nome.match(/\s/);

    let resposta = "";
    if (!possuiEspacos) {
        resposta = "Informe seu nome completo, por favor.";
    }
    return resposta;
}

const numVogais = (nome) =>{
    const Vogais = nome.match(/[A,a,E,e,I,i,O,o,U,u]/g)
    numevogais = Vogais.length
    return numevogais
}

const resp2 = (nome) =>{
    const sobrenome = nome.split(" ")
    const partes = sobrenome.length
    const sobre = sobrenome[partes - 1]    
    return sobre
}