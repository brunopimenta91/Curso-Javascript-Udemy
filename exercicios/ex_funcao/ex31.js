/*  Faça um programa que recebe o salário de um colaborador e calcule o reajuste baseado no salário atual:
 Salários até R$ 280,00 (incluindo): aumento de 20%
 Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
 Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
 Salários de R$ 1500,00 em diante: aumento de 5%
Após o aumento ser calculado, deverá ser informado: o salário antes do reajuste; o percentual de aumento aplicado; o valor do aumento; o novo salário, após o aumento.  */

const reajuste_salario = function(salario_antes) {
    let salario_depois; let percentual_reajuste

    if(salario_antes < 280) {
        percentual_reajuste = 1.2
        salario_depois = salario_antes * percentual_reajuste

    } else if(salario_antes < 700) {
        percentual_reajuste = 1.15
        salario_depois = salario_antes * percentual_reajuste

    } else if(salario_antes < 1500) {
        percentual_reajuste = 1.1
        salario_depois = salario_antes * percentual_reajuste

    } else {
        percentual_reajuste = 1.05
        salario_depois = salario_antes * percentual_reajuste

    }

    return `Salario anterior: ${salario_antes} / percentual reajuste: ${((percentual_reajuste - 1) * 100).toFixed(2)}% / Salario atual: ${salario_depois}`
}


//testando a função criada
console.log(reajuste_salario(1000))
console.log(reajuste_salario(2000))
console.log(reajuste_salario(500))



