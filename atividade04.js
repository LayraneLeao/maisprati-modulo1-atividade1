/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require("prompt-sync")()

function menu(){
    console.log("\nDigite (+) somar dois números")
    console.log("\nDigite (-) subtrair dois números")
    console.log("\nDigite (*) multiplicar dois números")
    let opcao = prompt("\nQual opção você deseja? ")
    return opcao
}
let numero01 = Number(prompt("Informe um número: "))
let numero02 = Number(prompt("Informe outro número: "))

let escolha = menu() // Armazena na variável 'escolha' o retorno da função 'menu'
switch (escolha){
    case '+':{
        console.log("\nSOMA = "+ (numero01 + numero02)+ "\n")
        break
    }

    case '-':{
        // Estou garantindo que o número final seja positivo
        if (numero01 >= numero02){
            console.log("\nSUBTRACAO = " + (numero01 - numero02)+ "\n")
        } else {
            console.log("\nSUBTRACAO = " + (numero02 - numero01)+ "\n")
        }
        break
    }

    case '*': {
        console.log("\nMULTIPLICAÇÃO = "+ (numero01 * numero02)+ "\n")
        break
    }
}





