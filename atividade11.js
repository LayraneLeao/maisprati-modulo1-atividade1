/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require("prompt-sync")()

let numero 
let soma = 0 // Inicializando a variável

for (let i = 0; i<5; i++){
    numero = Number(prompt("Informe um número: "))
    soma += numero
}
console.log(`SOMA TOTAL= ${soma}`)