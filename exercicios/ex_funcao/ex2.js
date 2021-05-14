// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
let idade_anos = 29

const idade_dias = function(anos) {
    return idade_anos * 365 
}

console.log(`Quem tem ${idade_anos} anos viveu ${idade_dias(idade_anos)} dias!`)

//exemplo da função usando arrow function 
const idade_dias2 = anos => anos * 365

console.log(idade_dias2(29))
