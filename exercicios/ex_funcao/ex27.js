/* Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem 
ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do 
cálculo atribuir o valor para uma variável C  */

function operacao_numeros(numeroA, numeroB) {
    let resultadoC

    if(numeroA == numeroB){
        resultadoC = numeroA + numeroB
    } else {
        resultadoC = numeroA * numeroB
    }

    return resultadoC
}

//testes da função  operacao_numeros()
console.log(operacao_numeros(10, 20))
console.log(operacao_numeros(100, 100))
console.log(operacao_numeros(-2, -3))


//exemplo da função com arrow function, usando operador ternário para fazer a logica e a armazenando em uma constante
const conta_numeros = (valorA, valorB) => valorA == valorB ? valorA + valorB : valorA * valorB

//testes da função   conta_numeros()
console.log(conta_numeros(100, 100))
console.log(conta_numeros(20, 5))
console.log(conta_numeros(-8, -8))
console.log(conta_numeros(-70, -4))




















