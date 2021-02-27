/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
  A     10%
  B     15%
  C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

//uma função arrow que foi armazenada em uma constante
const aumento_funcionario = (plano_trabalho, salario_atual) => {
    let salario_aumentado 

    switch(plano_trabalho) {
        case 'a':
            salario_aumentado = salario_atual * 1.1
        break;
        case 'b':
            salario_aumentado = salario_atual * 1.15
        break;
        case 'c':
            salario_aumentado = salario_atual * 1.2
        break;
        default:
            console.log('plano de trabalho inválido')
            salario_aumentado = salario_atual
        break;
    }

    return `salario anterior: ${salario_atual} / plano: ${plano_trabalho} / salario aumentado: ${salario_aumentado.toFixed(2)}`
}


//testando a função, com varias chamadas à ela.
console.log(aumento_funcionario('c', 2000))

console.log(aumento_funcionario('z', 10000))

console.log(aumento_funcionario('a', 50000))

console.log(aumento_funcionario('b', 3000))
