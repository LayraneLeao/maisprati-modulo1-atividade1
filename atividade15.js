/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

let fibonacci = [0, 1];  // Inicializando com os dois primeiros números da sequência

for (let i = 2; i < 10; i++) {  // Começando a partir do índice 2, pois 0 e 1 já estão ocupados com os números '0 e 1'
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];  // Cada número é a soma dos dois anteriores
}

console.table(fibonacci);  // Imprime os primeiros 10 números da sequência, indo do índice 0 até o 9
