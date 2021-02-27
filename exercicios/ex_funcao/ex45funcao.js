/* Faça um programa que recebe o salário de um colaborador e calcule
reajuste segundo o seguinte critério, baseado no salário atual:
 Salários até R$ 280,00 (incluindo): aumento de 20%
 Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
 Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
 Salários de R$ 1500,00 em diante: aumento de 5%
Após o aumento ser calculado, deverá ser informado: o salário antes do
reajuste; o percentual de aumento aplicado; o valor do aumento; o novo
salário, após o aumento.   */

const mudanca_salario = function (salario_hoje) {
    let percentual_reajuste = 0; let reajuste = 0; let salario_novo = 0

    if(salario_hoje <= 280) {
        percentual_reajuste = 0.2
    } else if(salario_hoje <= 700) {
        percentual_reajuste = 0.15
    } else if(salario_hoje <= 1500) {
        percentual_reajuste = 0.1
    } else {
        percentual_reajuste = 0.05
    }

    reajuste = salario_hoje * percentual_reajuste
    salario_novo = salario_hoje + reajuste

    console.log(`salario hoje: ${salario_hoje} / percentual reajuste: ${percentual_reajuste} 
    / valor reajuste: ${reajuste} / salario novo: ${salario_novo}`)
}

//chamadas diversas a função mudança_salario()

mudanca_salario(1000)

mudanca_salario(10000)

mudanca_salario(1200)
