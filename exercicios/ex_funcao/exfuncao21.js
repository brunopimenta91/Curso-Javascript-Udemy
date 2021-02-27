/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const valor_plano = (idade) => {
    let valor = 100
    let adicional = 0

    if(idade < 0) {
        console.log('erro! idade inválida!')
    } else {
        if(idade == 0 || idade < 10) {
            adicional = 80
        } else if (idade <= 30) {
            adicional = 50
        } else if (idade <= 60) {
            adicional = 95
        } else {
            adicional = 130
        }
    
        return valor + adicional
    }
}


console.log(valor_plano(8))
console.log(valor_plano(50))
console.log(valor_plano(-10))


