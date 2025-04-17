const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inPaciente.value //obtém o nome do paciente
    pacientes.push(nome) //adiciona o nome no final do vetor
    let lista = "" //string para concatenar pacientes 
    for (let i = 0; i < pacientes.length; i++) { //for "tradicional" (inicia em 0, enquanto menor que o tamanho do array)
        lista = lista + (i + 1) + " " + pacientes[i] + "\n"
    }
    respLista.innerText = lista //exibe a lista de pacientes da página
    frm.inPaciente.value = "" //limpa conteúdo do campo de fomrmulário
    frm.inPaciente.focus() // posiciona o cursor no campo
})

frm.btUrgencia.addEventListener("click", () => {
    if (!frm.checkValidity()) { //verifica se as validações do form estão ok(no caso, paciente is required)
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus() //posiciona o cursor no campo inPaciente 
        return //retorna ao form
    }
    const nome = frm.inPaciente.value //obtém o nome do paciente
    pacientes.unshift(nome) //adiciona paciente no inicio do vetor
    let lista = ""
    //forEach aplicado sobre o array pacientes
    pacientes.forEach((pacientes, i) => (lista = lista + (i + 1) + " " + pacientes + "\n"))
    respLista.innerText = lista //exibe a lista de pacientes
    frm.inPaciente.value = "" //limpa conteúdo de formulário
    frm, inPaciente.focus()
})

frm.btAtender.addEventListener("click", () => {
    //se o tamanho do vetor = 0
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atenter = pacientes.shift() //remove do início da fila(e obtém nome)
    respNome.innerText = atenter //exibe o nome do paciente em atendimento
    let lista = "" //lista para concatenar pacientes
    pacientes.forEach((pacientes, i) => (lista = lista + (i + 1) + " " + pacientes + "\n"))
    respLista.innerText = lista //exibe a lista de pacientes
})