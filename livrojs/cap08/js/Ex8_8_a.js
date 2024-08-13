const formu = document.querySelector("form")
const SaidaNome = document.querySelector("#SaídaNome")
const SaidaTraços = document.querySelector("#SaídaTraços")
const SaidaCategoria = document.querySelector("#SaidaCategoria")

formu.addEventListener("submit", (e) =>{
    e.preventDefault()
    const Nome = formu.Nome.value
    const Idade = Number(formu.Idade.value)
    const NomeAluno = MostrarNome(Nome)
    const IdadeAluno = ClassIdade(Idade)
    const ContaTraços = NumTraços(NomeAluno)

    SaidaNome.innerText = NomeAluno
    SaidaCategoria.innerText ="Categoria: " + IdadeAluno
    SaidaTraços.innerText = ContaTraços
})

    const MostrarNome = (Nome) =>{
        const RetornoNome = Nome
        return RetornoNome
    }

    const ClassIdade = (Idade) => {
        let classe = ""
        if(Idade <= 12){
            classe = "Infantil"
        }else if(Idade >= 13 && Idade <=18){
            classe = "Juvenil"
        }else{
            classe = "Adulto"
        }
        return classe
    }

    const NumTraços =  (NomeAluno) =>{
        const TesteNome = NomeAluno
        const QtdTraços = NomeAluno.length 
        let Traços = ""
        for(let i = 0; i < QtdTraços; i++){
            if(NomeAluno.charAt(i) != " " ){
                Traços += "_"
            }else{
                Traços +=" "
            }
        }
        return Traços

    }
