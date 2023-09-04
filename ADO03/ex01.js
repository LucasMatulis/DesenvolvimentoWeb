const prompt = require("prompt-sync")();

console.log("Bem-vindo à calculadora de compra de ingressos de cinema!");

console.log("Digite o tipo de ingresso (Meia ou Inteira): ");
const tipo = prompt();

console.log("Digite a quantidade de ingressos desejada: ");
const qtd = Number(prompt());

console.log("Total a pagar: R$"+calcularTotal(tipo,qtd));

function calcularTotal(tipo, qtd) {

    const precoIngresso = 28.5;

  if (tipo.toLowerCase() === "meia") {

    return precoIngresso * 0.5 * qtd;

  } else if (tipo.toLowerCase() === "inteira") {

    return precoIngresso * qtd;

  } else {

    return "Tipo de ingresso inválido. Use 'Meia' ou 'Inteira'.";

  }
}
