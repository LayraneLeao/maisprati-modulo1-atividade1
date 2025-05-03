/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const prompt = require("prompt-sync")()

let valor1 = Number(prompt("Informe um valor: "))
let valor2 = Number(prompt("Informe outro valor: "))
let valoresIguais = 1

// Estou criando um loop para que ele só termine quando a pessoa digitar números diferentes 
while (valoresIguais === 1){
    if (valor1 === valor2){
        console.log("\nValores iguais!Tente novamente!\n")
        valor1 = Number(prompt("Informe um valor: "))
        valor2 = Number(prompt("Informe outro valor: "))
    } else {
        valoresIguais = 0 // Sai do loop
    }
}

// Digitando os números diferentes agora será exibido os números em ordem crescente
if (valor1 > valor2){
    console.log(`\nNúmeros em ordem crescente: ${valor2} ${valor1}`)
    console.log('\nEncerrando...\n')
} else {
    console.log(`\nNúmeros em ordem crescente: ${valor1} ${valor2}`)
    console.log('\nEncerrando...\n')
}    


