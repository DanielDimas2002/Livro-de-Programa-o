const formu = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

formu.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = formu.inNome.value
    const acertos = Number(formu.inAcertos.value)
    candidatos.push({nome, acertos})
    formu.inNome.value = ""
    formu.inAcertos.value = ""
    inNome.focus()
    formu.inListarTodos.dispatchEvent(new Event("click"))
})

formu.inListarTodos.addEventListener("click", ()=>{
        if(candidatos.length == 0){
            alert("Não há candidatos na lista!")
            return
        }
    const saida = candidatos.reduce((acumulador, pessoa) =>
        acumulador + "\nCandidato: " + pessoa.nome +" "+ "Acertos: " + pessoa.acertos,"Candidato / Número de acertos") 
    resp.innerText = saida 

})

formu.inAprovados.addEventListener("click", () =>{
    if(candidatos.length == 0){
        alert("Não há candidatos na lista!")
        return
    }
    let saida = ""
    const notaCorte = prompt("A partir de quantos acertos os candidatos serão aprovados?")
    const aprovados = candidatos.filter(aux => aux.acertos >= notaCorte)
        if(aprovados.length != 0){
        saida = aprovados
        resp.innerText = "Os candidatos que acertaram " + notaCorte + " questões ou mais foram: \n" + saida
        }else{
            resp.innerText = "Não houveram candidatos que acertaram " + notaCorte + "questões no mínimo." 
        }
})