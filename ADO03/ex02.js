const prompt = require("prompt-sync")();

function semaforo(cor){

    if(cor.toLowerCase()==="vermelho")
        return "Espere"
    else if(cor.toLowerCase()==="verde")
        return "Atravesse"
    else 
        return "Farol Inoperante"
}

console.log("Digite a cor do semaforo: ")
 console.log(semaforo(prompt()))
