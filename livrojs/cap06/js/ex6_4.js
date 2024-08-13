const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const criancas = [] //declara vetor global

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    criancas.push({nome, idade}) //adicona dados ao vetor de objetos
    frm.reset() //limpa os campos do formulário
    frm.inNome.focus() //posiciona o cursor neste ponto
    frm.btListar.dispatchEvent(new Event("click")) //dispara o evento btListar
})

frm.btListar.addEventListener("click", ()=>{
    if(criancas.length == 0){ // se estiver vazio emite o alerta
        alert("Não há crianças na lista")
        return
    }
    let lista = ""
    for(const crianca of criancas){
        const {nome, idade} = crianca //destrutura o objeto
        lista += nome + " - " + idade + " anos\n"
    }
    resp.innerText = lista
})

frm.addEventListener("click", () =>{
    if(criancas.length == 0){
        alert("Não há crianças na lista")
        return  
    }
    const copia = [...criancas] //cria cópia do vetor crianças
    copia.sort((a, b)=> a.idade - b.idade) //ordena pela idade
    let resumo = "" //para concatenar a saída
    let aux = copia[0].idade //menor idade do vetor ordenado
    let nomes = [] //para inserir nomes de cada idade
    for(const crianca of copia){
        const{nome, idade} = crianca
        if(idade == aux) { //se é da mesma idade auxiliar...
            nomes.push(nome) //adiciona ao vetor nomes
        }else{ //senão, monta o resumo para cada idade
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
            resumo += ((nomes.length/copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade //obtém a nova idade na ordem
            nomes = [] //limpa o vetor dos nomes
            nomes.push(nome) //adiciona o primeiro da nova idade
        }
    }
// adiciona a última criança
resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
resumo += ((nomes.length / copia.length) * 100).toFixed(2) +"%\n"
resumo += "(" + nomes.join(", ") + ")\n\n"
resp.innerText = resumo //exibe a resposta
})