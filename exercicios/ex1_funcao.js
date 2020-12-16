/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */

 function operacoes(valor1, valor2) {
    //soma
    let soma = valor1 + valor2
    console.log(`soma de ${valor1} com ${valor2} é ${soma}`)

    //subtracao
    let subtracao = valor1 - valor2
    console.log(`subtracao de ${valor1} com ${valor2} é ${subtracao}`)

    //produto
    let produto = valor1 * valor2
    console.log(`produto de ${valor1} com ${valor2} é ${produto}`)

    //divisao
    let divisao = valor1 / valor2
    console.log(`divisao de ${valor1} com ${valor2} é ${divisao}`)

 }

 //chamada à função operacoes()
operacoes(1000, 25)


//uma chamada à função operacoes, que foi armazenada em uma constante

const primeira_rodada = operacoes(9, 3)

console.log(primeira_rodada)

