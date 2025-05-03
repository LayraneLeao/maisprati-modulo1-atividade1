/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require("prompt-sync")();

// aprovado = 6 - 10
// recuperação = 5.99 - 4
// reprovado = - 4


function verificarNota(nota){
    if(nota >= 6 && nota <=10){
        console.log("\nAprovado!")
    } else if (nota >= 4 && nota < 6){
        console.log("\nRecuperação!")
    } else {
        console.log("\nReprovado!")
    }
}

let notaAluno = Number(prompt("Informe sua nota: "))

// Passando a variável 'notaAluno' para a função e chamando ela.
verificarNota(notaAluno)