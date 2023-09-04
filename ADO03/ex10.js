const prompt = require("prompt-sync")();

function diaSemana(dia){

    switch(dia){
        case 0:
            return "Domingo"
            break;
        case 1:
            return "Segunda"
            break;
        case 2:
            return "Terça"
            break;
        case 3:
            return "Quarta"
            break;
        case 4:
            return "Quinta"
            break;
        case 5:
            return "Sexta"
            break;
        case 6:
            return "Sabado"
            break;
        default:
            return "Dia da semana invalido"
            break
    }
}

function meS(mes){

    switch(mes){
        case 1:
            return "Janeiro"
            break;
        case 2:
            return "Fevereiro"
            break;
        case 3:
            return "Março"
            break;
        case 4:
            return "Abril"
            break;
        case 5:
            return "Maio"
            break;
        case 6:
            return "Junho"
            break;
        case 7:
            return "Julho"
            break;
        case 8:
            return "Agosto"
            break;
        case 9:
            return "Setembro"
            break;
        case 10:
            return "Outurbo"
            break;
        case 11:
            return "Novembro"
            break;
        case 12:
            return "Dezembro"
            break;
        default:
            return "Mês invalido"
            break;
    }
}

function msgEnvio(dia, diasemana,mes,ano){

    if(dia>31 || dia<=0){
        console.log("Data invalida")
    }
    else{
        console.log("Enviado "+diasemana+", "+dia+" de "+mes+" de "+ano)
    }


}

console.log("Digite o dia do mes: ")
let dia=prompt()
console.log("Digite o dia da Semana: ")
let diasemana=diaSemana(Number(prompt()))
console.log("Digite o mês: ")
let mes= meS(Number(prompt()))
console.log("Digite o ano: ")
let ano= prompt()

msgEnvio(dia,diasemana,mes,ano)

