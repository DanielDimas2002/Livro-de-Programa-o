const formu = document.querySelector("form")
const saida = document.querySelector("h3")

formu.addEventListener("submit", (e) =>{
    e.preventDefault()
    const mensagem = formu.inMensagem.value
    const tamanho_palavra = mensagem.length 
    let mensagem_sem_espaços = ""
    let posicao_par = ""
    let posicao_impar = ""
    for(let i = 0; i< tamanho_palavra; i++){
        if(mensagem.includes(" ")){
           mensagem_sem_espaços = mensagem.replace(/\s/g, "")
        }
    }

    for(let i = 0; i<tamanho_palavra; i++){
        if(i % 2 == 0){
            posicao_par += mensagem.charAt(i)
        }else{
            posicao_impar += mensagem.charAt(i)
        }
    }
    saida.innerText = posicao_par + " " + posicao_impar
    
    formu.addEventListener("click", () =>{
        saida.innerText = mensagem
    })
})