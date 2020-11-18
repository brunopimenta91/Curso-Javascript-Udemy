
const imprimirResultado = function (nota) {
    if(nota > 7) {
        console.log('aprovado!')
    } else {
        console.log('reprovado!!!!!!')
    }
}

//chamadas de funcao da funcao  imprimirResultado
imprimirResultado(10)
imprimirResultado(4)

//como javascript é uma linguagem de programação FRACAMENTE TIPADA, o parametro passado como uma string não tratará erro. Mas sera executado como o else do bloco if-else (retornando a frase 'reprovadpo', mesmo não sendo um numero)
imprimirResultado('epa!')


