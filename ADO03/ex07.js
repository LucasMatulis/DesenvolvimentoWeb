const prompt = require("prompt-sync")();

function situacaoFebre(temperatura){

    if(temperatura>=41)
        console.log("A situação para sua temperatura é Hipertermina")
    else if(temperatura>=39.6 && temperatura<41)
        console.log("A situação para sua temperatura é Febre Alta")
    else if(temperatura>=37.6 && temperatura<39.6)
        console.log("A situação para sua temperatura é Febre")
    else if(temperatura>=36 && temperatura<37.6)
        console.log("A situação para sua temperatura é Normal")
    else if(temperatura<36)
        console.log("A situação para sua temperatura é Hipotermia")
}

console.log("Digite sua temperatura: ")
situacaoFebre(Number(prompt()))