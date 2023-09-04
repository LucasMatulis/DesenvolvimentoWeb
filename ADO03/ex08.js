const prompt = require("prompt-sync")();

function media(nota1,nota2,nota3){

    let media= (nota1+nota2+nota3)/3

    if(media>=8)
        console.log("Aprovado com Sucesso")
    else if(media>=6 && media<8)
        console.log("Aprovado")
    else if(media>=3 && media<6)
        console.log("Recuperação")
    else if(media<=0)
        console.log("Desistente")
    else if(media<3)
        console.log("Reprovado")
}

let nota1,nota2,nota3

console.log("Digite as 3 notas para o calculo da media")
console.log("nota 1: ")
nota1= Number(prompt())
console.log("nota 2: ")
nota2= Number(prompt())
console.log("nota 3: ")
nota3= Number(prompt())

media(nota1,nota2,nota3)

