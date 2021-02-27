/* 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.  */

function imprime11() {
    let contagem = 1

    while(contagem <= 11) {

        console.log(`Hello World! Vez ${contagem}`)
        contagem++
    }
}

//chamada à função sem parametros de nome 'imprime11
imprime11()