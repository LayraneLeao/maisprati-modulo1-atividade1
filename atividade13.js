/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require("prompt-sync")()

let numero = 1 // Inicializando para ele entrar no enquanto
let quantidade = 0
let soma = 0

while (numero !== 0){
    numero = Number(prompt("Informe um número decimal: "))
    if (numero !== 0){ // Quando o último número digitado for 0, meu contador de quantidade não receberá +1, evitando um calculo incorreto da media
        quantidade += 1
    }
    soma += numero 
    
}
mediaAritmetica = soma / quantidade
console.log(`A média aritmética final é: ${mediaAritmetica.toFixed(2)}!`)