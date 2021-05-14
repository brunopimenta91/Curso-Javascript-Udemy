/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60   */


const somando_array = function(array_passado) {

    let soma = array_passado.reduce((soma, primeiro_elemento) => soma + primeiro_elemento);
    return soma
}


//testes da função criada
console.log(somando_array([10, 10, 10]))
console.log(somando_array([15, 15, 15, 15]))
console.log(somando_array([1, -2, 0, 3]))
console.log(somando_array([-1, -2, -10, 5]))
