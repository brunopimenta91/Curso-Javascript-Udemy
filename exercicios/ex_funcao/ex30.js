/*  Escreva um algoritmo que receba dois números reais e um código de seleção do usuário. 
Se o código digitado for 1, faça o algoritmo adicionar os dois números previamente 
digitados e mostrar o resultado; se o código de seleção for 2, os números deverão ser 
multiplicados; se o código de seleção for 3, o primeiro número deve ser dividido pelo segundo  */

//função anonima armazenada numa constante
const calculo_valores = function(numero1, numero2, opcao_calculo) {
    let resultado

    if(opcao_calculo == 1) {
        resultado = numero1 + numero2
    } else if(opcao_calculo == 2) {
        resultado = numero1 * numero2
    } else if(opcao_calculo == 3) {
        resultado = numero1 / numero2
    } else {
        resultado = 'opcao inválida'
    }

    return resultado
}

//testando a função
console.log(calculo_valores(10, 10, 1))
console.log(calculo_valores(10, 30, 2))
console.log(calculo_valores(200, 5, 3))
console.log(calculo_valores(10, 10, -908))


