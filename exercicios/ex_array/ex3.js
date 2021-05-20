/* Faça um programa em C para ler um vetor de 10 números inteiros, calcule e imprima a média aritmética de seus elementos., em seguida atualize seu valor com o dobro do valor anterior, e imprima o vetor atualizado.  */

const lista_valores = [20, 3, 4, 12, 90, 44, 11, 18]

const lista_valores2 = [20, 3, 4]


//função que recebe um array de numeros como parametro
const media_valores = function(array_valores) {

    const soma = (valor_soma, valor_seguinte) => valor_soma + valor_seguinte

    return (array_valores.reduce(soma)) / array_valores.length
}

//testando a função criada
console.log(media_valores(lista_valores))
console.log(media_valores([20, 30, 10]))
console.log(media_valores(lista_valores2))


