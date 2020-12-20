/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

//uma função que foi armazenada em uma constante
const conta = (numeroA, operacao, numeroB) => {
    let resultado

    switch(operacao) {
        case '+':
            resultado = numeroA + numeroB
            break;
        case '-':
            resultado = numeroA - numeroB
            break;
        case '*':
            resultado = numeroA * numeroB
            break;
        case '/':
            resultado = numeroA / numeroB
            break;
        default:
            resultado = 'valor impossivel de calcular'
    }

    return `A operacao de ${numeroA} ${operacao} ${numeroB} é ${resultado}`
}


console.log(conta(1, '+', 2))

console.log(conta(1000, '$', 2))

console.log(conta(33, '-', 0.444))

console.log(conta(5, '*', 50))

console.log(conta(49, '/', 7))
