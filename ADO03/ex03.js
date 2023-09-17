const prompt = require("prompt-sync")();

function orcamento(ganhos, gastos){

    if(ganhos>=gastos)
        return "Você está dentro do orçamento"
    else
        return "Você está fora do orçamento! Não gaste mais!"

}

console.log("Digite seus ganhos")

const ganhos= Number(prompt())

console.log("Digite seus gastos")

const gastos= Number(prompt())

console.log(orcamento(ganhos,gastos))