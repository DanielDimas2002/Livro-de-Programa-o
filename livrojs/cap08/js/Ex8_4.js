const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = [] //vetor global para armazenar os itens do pedido

frm.rbPizza.addEventListener("click", () => { // quando radio button é clicado
    frm.inBebida.className = "oculta" // oculta select das pizzas
    frm.inPizza.className = "exibe" // exibe select das pizzas
})

frm.rbBebida.addEventListener("click", () => { // quando radio button é clicado
    frm.inPizza.className = "oculta" // oculta select das pizzas
    frm.inBebida.className = "exibe" // exibe select das bebidas
})

frm.inDetalhes.addEventListener("focus", () => {
    if(frm.rbPizza.checked){
        const pizza = frm.inPizza.value
// uso do operador térnário, para indicar o número de sabores        
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
// atributos placeholder exibe uma dica de preenchimento do campo
        frm.inDetalhes.placeholder = "Até " + num + " sabores"
    }
})

frm.inDetalhes.addEventListener("blur", () => { // quando campo perde o foco
    frm.inDetalhes.placeholder = "" // limpa a dica de prenchimento
})

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    let produto
    if(frm.rbPizza.checked){
        const num = frm.inPizza.selectedIndex // obtém o número do item selecionados
        produto = frm.inPizza.options[num].text //texto do item selecionado
    }else{
        const num = frm.inBebida.selectedIndex
        produto = frm.inBebida.options[num].text
    }
        const detalhes = frm.inDetalhes.value // conteúdo ao inDetalhes
        itens.push(produto + "(" + detalhes + ")") // adicionar ao vetor
        resp.innerText = itens.join("\n") // exibe os itens do pedido

        frm.reset() //limpa o form
        frm.rbPizza.dispatchEvent(new Event("click")) // dispara click em rbPizza
})