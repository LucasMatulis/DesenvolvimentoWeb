const prompt = require("prompt-sync")();

function situacao(altura, peso){

    const imc=peso/(altura*altura)

    if(imc>=40)
        console.log("Sua classificação é Obesidade Grau III")
    else if(imc>=35 && imc<40)
        console.log("Sua classificação é Obesidade Grau II")
    else if(imc>=30 && imc<35)
        console.log("Sua classificação é Obesidade Grau I")
    else if(imc>=25 && imc<30)
        console.log("Sua classificação é Sobrepeso")
    else if(imc>=18.5 && imc<25)
        console.log("Sua classificação é Normal")
    else if(imc<18.5)
        console.log("Sua classificação é Abaixo do Peso")
}

function imc(altura,peso){
    console.log((peso/(altura*altura)).toFixed(2))
}


let altura,peso

console.log("Digite o peso e altura para o calculo do IMC")
console.log("Altura: ")
altura= Number(prompt())
console.log("Peso: ")
peso=Number(prompt())

imc(altura,peso)
situacao(altura,peso)
