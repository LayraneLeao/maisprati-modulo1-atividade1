/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/

const prompt = require("prompt-sync")()

let valorA = Number(prompt("Informe o valor de A: ")) 
let valorB = Number(prompt("Informe o valor de B: ")) 
let valorC = Number(prompt("Informe o valor de C: ")) 

if ((valorA + valorB > valorC ) && (valorB + valorC > valorA) && (valorA + valorC > valorB)){

    if (valorA === valorB && valorB === valorC ){
        // Todos os lados iguais
        console.log("\nTriângulo Equilátero!\n")
    
    } else if (valorA === valorB || valorB === valorC || valorA === valorC){
        // Dois lados iguais
        console.log("\nTriângulo Isósceles!\n")
    
    } else if (valorA !== valorB && valorB !== valorC && valorA !== valorC){
        // Todos os lados diferentes
        console.log("\nTriângulo Escaleno\n")
    } 

} else {
    console.log("\nImpossível formar um triângulo!\n")
}

