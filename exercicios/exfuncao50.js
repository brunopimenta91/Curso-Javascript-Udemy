/* Escreva um algoritmo que receba dois números reais e um código de seleção do usuário.
Se o código digitado for 1, faça o algoritmo adicionar os dois números previamente
digitados e mostrar o resultado; se o código de seleção for 2, os números deverão ser
multiplicados; se o código de seleção for 3, o primeiro número deve ser dividido pelo
segundo. */

//função anonima armazenada em uma constante
const selecao_numeros = function(opcao, numero1, numero2) {
    let tipo_operacao
    let resultado 

    switch(opcao) {
        case 1:
            tipo_operacao = 'soma'
            resultado = numero1 + numero2
            break;
        case 2:
            tipo_operacao = 'multiplicacao'
            resultado = numero1 * numero2
            break;
        case 3:
            tipo_operacao = 'divisão'
            resultado = numero1 / numero2
            break;
        default:
            console.log('erro de opção')
    }

    console.log(`operação: ${tipo_operacao} / numero 1: ${numero1} / numero 2: ${numero2} / resultado: ${resultado}`)

}


selecao_numeros(1, 2, 3)

selecao_numeros(3, 100, 5)

selecao_numeros('e', 100, 100)