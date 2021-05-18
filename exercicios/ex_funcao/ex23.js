/* labore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro. */

let array_numeros = [123, 23, 232, 54, 1, 2, -34, 0]

const ver_numeroarray = function(array_passado, valor) {

    const numero_string = numero => numero.toString().length

    const numero_igual = numero => {
        if(numero == valor) {
            return numero
        }
    }
    //const numero_igual_valor = (tamanho_numero) => tamanho_numero ==  valor

    return array_numeros.map(numero_string).filter(numero_igual)
}

console.log(ver_numeroarray(array_numeros, 3))

/*
var count = 10;

console.log(count.toString());    // displays '10'
console.log((17).toString());     // displays '17'
*/
