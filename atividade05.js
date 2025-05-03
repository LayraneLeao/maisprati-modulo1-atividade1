/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const prompt = require("prompt-sync")()

// Baixo peso	Menor que 18,5
// Peso normal	De 18,5 até 24,9
// Sobrepeso	De 25 até 29,9
// Obesidade	30 ou mais

function verificarPeso(peso){
    if (peso < 18.5){
        console.log("Baixo Peso!\n")
    } else if (peso >= 18.5 && peso <= 24.9){
        console.log("Peso Normal!\n")
    } else if (peso >= 25 && peso <= 29.9){
        console.log("Sobrepeso!\n")
    } else {
        console.log("Obesidade!\n")
    }
}

let peso = Number(prompt("Informe seu peso: "))
let altura = Number(prompt("Informe sua altura (ex:1.65): ")) 
let imc = peso / (altura*altura)

console.log(`\nSeu IMC é: ${imc.toFixed(2)}`)
verificarPeso(imc)