/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt = require("prompt-sync")()

function verificarQuantidade(quant){
    let valorTotal
    if (quantidade < 12 ){
        valorTotal = 0.30 * quantidade
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}
        `) // Pulo a linha sem precisar do (\n)
    
    } else if (quantidade >= 12){
        valorTotal = 0.25 * quantidade
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}
        `) // Pulo a linha sem precisar do (\n)
    }
}

let quantidade = Number(prompt("Quantas maças você comprou? "))

verificarQuantidade(quantidade)