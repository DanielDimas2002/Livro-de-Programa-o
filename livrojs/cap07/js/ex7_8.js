const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const TAXA_MULTA = 2/100 //multa por atraso
const TAXA_JUROS = 0.33/100 //juros por dia atraso

frm.addEventListener("submit" , (e) =>{
    e.preventDefault() //evita envio do form
    const dateVenc = frm.inDateVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date() //cria variáveis(instancia objetos)
    const vencto = new Date() //do tipo Date()

    const partes = dateVenc.split("-") //data vem no formato aaaa-mm-dd
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) - 1)
    vencto.setFullYear(Number(partes[0]))

    const atraso = hoje - vencto // calcula a diferença de dias entre datas(em ms)
    let multa = 0 // inicializa multa e juros com 0
    let juros = 0

    if(atraso > 0){ //se conta estiver em atraso...
        // converte ms do atraso em dias (1 dia = 24h x 60 min x 60 seg x 100ms:86400000)
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA //calcula multa e juros
        juros = valor * TAXA_JUROS * dias
    }

    const total = valor + multa + juros //calcula o total

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})