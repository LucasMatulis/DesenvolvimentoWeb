const prompt = require("prompt-sync")();

function calcular(peso){
    let preco

    if(peso<0){
        console.log( "Numero invalido")
    }
    else if(peso<1000){
        preco=3.5
        peso=peso/100
        console.log("O total a pagar é R$"+preco*peso)
    }
    else if(peso>=1000){
        preco=3
        peso=peso/100
        console.log("O total a pagar é R$"+preco*peso)
    }
}

console.log("Digite a quantidade em gramas de sorvete pego: ")
calcular(Number(prompt()))