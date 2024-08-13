const formu = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

formu.addEventListener("submit", (e) =>{
e.preventDefault()
const nomeClube = formu.inClubes.value
if(clubes.includes(nomeClube)){
    alert("Este clube já foi adicionado.")
    return
}
clubes.push(nomeClube)
let lista = ""
for(let i = 0 ; i < clubes.length ; i++){
    lista = lista + (i + 1) + ' ' + clubes[i] + "\n"
}
resp.innerText = lista
formu.inClubes.value = ""
formu.inClubes.focus()
formu.btLista.dispatchEvent(newEvent("click"))
})

formu.btLista.addEventListener("click", () =>{
    if(clubes.length == 0){
        alert("Nenhum clube foi adicionado.")
        return
    }
let lista = ""
    for(let i = 0 ; i < clubes.length; i++){
        lista = lista + (i + 1) + ' ' + clubes[i] + "\n"
    }
resp.innerText = lista
formu.inClubes.value = ""
formu.inClubes.focus()
})

formu.btTabela.addEventListener("click", () => {
    let confrontos = ""
    if(clubes.length == 0 ){
        alert("Nenhum clube foi adicionado.")
        return
    }
    if(clubes.length%2 != 0){
        alert("Não há confrontos suficientes para todos os times. Certifique-se que o número de times é par!")
        return
    }else{
        const tabela = [...clubes]
            tabela.forEach((nomeClube, i) => {
            const time1 = tabela.shift() 
            const time2 = tabela.pop()
            confrontos = confrontos + time1 + " x " + time2 + "\n"
            resp.innerText = confrontos
                if(tabela.length == 2){
                    const team1 = tabela[0]
                    const team2 = tabela[1]
                    confrontos = confrontos + team1 + " x " + team2 + "\n"
                    resp.innerText = confrontos
                }
            })
    }

})