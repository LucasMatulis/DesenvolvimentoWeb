const prompt = require("prompt-sync")();

function mes(mes){

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

console.log("Digite o numero do mês")
console.log("O mes digitado é: "+mes(Number(prompt())))
