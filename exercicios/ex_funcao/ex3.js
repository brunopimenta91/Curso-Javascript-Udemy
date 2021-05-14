// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.

const valor_salario = function(total_horas, valor_hora) {
    return `Salário do mês: R$ ${total_horas * valor_hora}`
}

console.log(valor_salario(100, 20))


//exemplo da função usando arrow function 
const valor_salario2 = (horas_total, hora_valor) => `Salario mensal: ${horas_total * hora_valor}`

console.log(valor_salario2(100, 5))