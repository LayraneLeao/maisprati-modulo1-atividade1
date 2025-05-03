/*  2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

const prompt = require("prompt-sync")()

// Irei considerar: 
// Criança: 2 - 10
// Adolescente: 11 - 17
// Adulto: 18 - 59
// Idoso: 60+


function verificarIdade(){
    let idade = Number(prompt("Informe sua idade: "))

    if (idade >= 2 && idade <= 10){
        console.log("\nCriança")
    } else if (idade  >= 11 && idade <= 17){
        console.log("\nAdolescente")
    } else if (idade >= 18 && idade <= 59){
        console.log("\nAdulto")
    } else if (idade >= 60){
        console.log("\nIdoso")
    } else {
        console.log("\nA idade informada está fora da categoria!")
    }
}

// Chamando a função
verificarIdade()