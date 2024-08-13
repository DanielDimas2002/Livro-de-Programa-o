const frm = document.querySelector("form") //obtém elementos da página
const respErros = document.querySelector("#outErros")
const resChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] //vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 //num aleatório entre 1 e 100
const CHANCES = 10 //constante com o número máximo de chances

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value) //obtém o número digitado
    if(numero == sorteado){ //se acertou
        respDica.innerText = "Parabéns!!! O número sorteado foi: " + sorteado
        frm.btSubmit.disabled = true //troca o status dos botões
        frm.btNovo.className = "exibe"
        frm.btNovo.addEventListener("click", () =>{
            location.reload()
        })
    }else{
            if(erros.includes(numero)){ //se o número existe no vetor erros(já apostou)
                alert("Você já apostou o número " + numero + " tente outro...")
                }else{
                    erros.push(numero) //adiciona número ao vetor
                    const numErro = erros.length //obtém tamanho do vetor
                    const numChances = CHANCES - numErro //calcula número de chances
                    // exibe número de erros, conteúdo do vetor e número de chances
                    respErros.innerText = numErro + " |Números apostados: " + erros
                    resChances.innerText = numChances
                        if(numChances == 0){
                            alert("Suas chances acabaram...")
                            frm.btSubmit.disabled = true
                            frm.btNovo.className = "exibe"
                            respDica.innerText = "Game Over!!! Número sorteado: " + sorteado
                            frm.btNovo.addEventListener("click", () =>{
                                location.reload()
                            })
                        }else{
                            //usa operador ternário para mensagem da dica
                            //const dica = numero < sorteado ? "maior" : "menor"
                             if(numero < sorteado){
                            respDica.innerText = "Dica: Tente um número maior que " + numero
                             }else{
                            respDica.innerText = "Dica: Tente um número menor " + numero
                             }
                        }
                    }
        }
frm.inNumero. value = "" //limpa campo de entrada
frm.inNumero.focus() //posiciona o cursor neste ponto
})