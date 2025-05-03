/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */
// fatorial de 5: 5*4*3*2*1=120

const prompt = require("prompt-sync")()

let numero = Number(prompt("\nInforme um número: ")) 
let i = numero - 1 
let fatorial = numero 

while (i !== 1){
    fatorial *= i 
    i -- 
}

console.log(`O fatorial de ${numero} é: ${fatorial.toFixed(2)}\n`)