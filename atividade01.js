/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

const prompt = require("prompt-sync")()

let numero = Number(prompt("Informe um número: "))

if (numero % 2 === 0){
    console.log("\nNúmero Par!")
} 
if (numero % 2 !== 0) {
    console.log("\nNúmero ímpar!")
}
