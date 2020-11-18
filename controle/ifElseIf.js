//funcao que verifica se um numero está compreendido em determinado intervalo entre dois numeros
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

//funcao que verifica nota e atribui uma classificacao
const imprimirResultado = function (nota) {
    if(nota.entre(9,10)) {
        console.log('quadro de honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('reprovado')
    } else {
        console.log('nota inválida')
    }

    console.log('saiu da estrutura if else if')

}

//chamadas diversas a funcao imprimirResultado()
imprimirResultado(8.9)
imprimirResultado(-2)
imprimirResultado(9.8)
imprimirResultado(1.2)

