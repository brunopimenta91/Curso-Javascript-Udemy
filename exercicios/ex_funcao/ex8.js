//Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

let produto_numeros = function(numero_primeiro, numero_segundo) {
    let produto = 0

    if((numero_primeiro >= 0) && (numero_segundo >= 0)) {

        for(let indice = 1; indice <= numero_primeiro; indice++){
            produto += numero_segundo
        }
        return produto

    } else {
        return `numeros negativos detectados!`
    }
}

//testes de valores
console.log(produto_numeros(2,8))
console.log(produto_numeros(10,8))
console.log(produto_numeros(2, -8))
console.log(produto_numeros(200,8))
console.log(produto_numeros(-6,-88))
console.log(produto_numeros(0, 0))