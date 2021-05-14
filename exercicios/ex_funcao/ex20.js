/* Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -1   */

/*   função ANONIMA maior
const menorNumero = function(numero_inicio, numero) {
    let menor = numero_inicio;

    if(numero < menor) {
        menor = numero
    }
    return menor
}   */

/*   função ANONIMA menor
const menorNumero = function(numero_inicio, numero) {

    if(numero < numero_inicio) {
        numero_inicio = numero
    }
    return numero_inicio
}  

const verifica_menor = function(array_numeros) {
    return array_numeros.reduce(menorNumero)
}
*/


// função ARROW menor AINDA  - usei OPERADOR TERNÁRIO  (   ?   :   ), para verificar qual dos numeros é o menor
const menorNum = (num_inicio, num_seguinte) => num_seguinte < num_inicio ? num_seguinte: num_inicio

const verifica_menor = array_numeros => array_numeros.reduce(menorNum)


console.log(verifica_menor([10, 5, 35, 65]))    // retornará 5
console.log(verifica_menor([5, -15, 50, 3]))    // retornará -15