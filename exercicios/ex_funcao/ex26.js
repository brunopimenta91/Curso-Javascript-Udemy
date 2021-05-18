//  Faça um programa que entre com o nome e o salário de um funcionário e mostre seu novo salário, sabendo que o mesmo teve um aumento de 10%.

function mostra_salario(nome, salario_atual) {

    return salario_atual * 1.1
}

//testando a função criada
console.log(mostra_salario('bruno', 1000))
console.log(mostra_salario('ana', 2000))
console.log(mostra_salario('alfredo', 4000))


//função criada com uso de arrow function e armazenada em uma constante
const revela_salario = (nome, salario) => `O colaborador ${nome} tem o salário de R$ ${(salario * 1.1).toFixed(2)}`

//testando a função criada
console.log(revela_salario('Nuno', 8000))
console.log(revela_salario('Mariana', 3000))
console.log(revela_salario('Aldo', 2000))
