const frm = document.querySelector("form") //obtém os elementos da página
const resp = document.querySelector("pre")
const carros = [] // vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco}) //adiciona dados ao vetor de objetos
    frm.inModelo.value = "" //limpa campos do form
    frm.inPreco.value = ""
    inModelo.focus() //posiciona curso neste campo
    //dispara um evento de click em btListar (equivale a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () =>{
    if(carros.length == 0){ // se o tamanho do vetor é igual a 0
        alert("Não há carros na lista")
        return
    }
    //metodo reduce() concatena um string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = "Lista de carros cadastrados\n" + '-'.repeat(40) + "\n" + lista
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if(maximo == 0 || isNaN(maximo)){ //se não informou ou valor inválido
        return
    }
//cria um novo vetor com os objetivos que atendem a condição de filtro
const carrosFilter = carros.filter(carro => carro.preco <= maximo)
if(carrosFilter.length==0){ //se o vetor filtrado é 0
    alert("Não há carros com o preço inferior ou igual ao solicitado.")
    return
}
let lista = ""
for(const carro of carrosFilter){ //percorre cada elemento do arrey
    lista = lista + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n"
}
resp.innerText = "Carros até " + maximo.toFixed(2) + " - ".repeat(40) + "\n" + lista
})

frm.btSimular.addEventListener("click", () =>{
    const desconto = Number(prompt("Qual o percentual de desconto: "))
    if(desconto == 0 || isNaN(desconto)){ //se não informou ou valor inválido
        return
    }
const carrosDesc = carros.map(aux => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco*desconto/100)
}))
let lista = ""
for(const carro of carrosDesc){ //percorre cada elemento do array
    lista = lista + carro.modelo + " -  R$: " + carro.preco.toFixed(2) + "\n"
}
resp.innerText = "Carros com desconto: " + desconto + "%" + "\n" + " - ".repeat(40) + "\n" + lista
})