// 1) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.
//funções arrows - calculam operacoes matermaticas basicas entre 2 valores 
const soma = (valor1, valor2) => valor1 + valor2

const subtracao = (valor1, valor2) => valor1 - valor2

const multiplicacao = (valor1, valor2) => valor1 * valor2

const divisao = (valor1, valor2) => valor1 / valor2


//função anonima armazenada em uma constante, que possui 3 parametros, sendo o ultimo uma função
const mostra_calculo = function(numero1, numero2, operacao) {

    console.log(operacao(numero1, numero2))    //chamada a função passada como parametro na função mostra_calculo, usando os outros 2 parametros como tambem seus parametros
}


//testando a função criada
mostra_calculo(1, 2, soma)
mostra_calculo(1, 2, multiplicacao)
mostra_calculo(1, 2, subtracao)
mostra_calculo(1, 2, divisao)

/*

função anomina inserida em uma constante (a constante soma)
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(10, 90, function (x, y) {
    return x - y
})
*/

