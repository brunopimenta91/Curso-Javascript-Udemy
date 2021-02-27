//Crie uma função que calcula 5% de desconto retornando o valor do desconto.

//função anonima armazenada em uma constante 
const desconto_valor = function (valor = 0) {

    return valor * 0.05
}


//chamada diversas à chamada desconto_valor()   /   o retorno das funções serão exbidas no console

console.log(`desconto é: ${desconto_valor(2000)}`)
