// Faça um programa que entre com o nome e o salário de um funcionário e mostre seu novo salário, sabendo que o mesmo teve um aumento de 10%.

//função arrow armazenada na constante vendo_aumento()
const vendo_aumento = (nome, salario_velho) => {
    let salario_novo = salario_velho + (salario_velho * 0.1)
    
    console.log(`O funcionario ${nome} de salario ${salario_velho} PASSARÁ A GANHAR ${salario_novo}`)
}


//chamadas diversas à função
vendo_aumento('bruno', 2000)

vendo_aumento('ana', 1000)

vendo_aumento('Guilherme', 30000)