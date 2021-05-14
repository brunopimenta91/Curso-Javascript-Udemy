/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.
Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por 2 é zero.  */


const lista_numeros = [1, 2, 4, 50, 5, 6, 8, -9, 1600]

let elementoEnumero_par = function(valor, indice) {
    if((valor % 2 == 0) && (indice % 2 == 0)) {
        return valor
    }
}

const lista_numeros_indices_pares = lista_numeros.filter(elementoEnumero_par)

console.log(lista_numeros_indices_pares)

