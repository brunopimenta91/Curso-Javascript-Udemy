//Faça um Programa que peça um número e então mostre a mensagem: O número informado foi [número]. 

//função anônima armazenada em uma constante

const informa_numero = function(numero) {
    console.log(`O numero informado foi ${numero}!`)
}

//chamadas testes à função informa_numero()

informa_numero(100)

informa_numero(23.33)

informa_numero(0.5)

informa_numero(-12233)