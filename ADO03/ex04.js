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

console.log("Digite o numero do dia da semana")
console.log("O dia da semana deste numero é: "+diaSemana(Number(prompt())))