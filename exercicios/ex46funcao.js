// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maioridade_pessoa(ano_nascimento) {
    let informacao

    if((new Date().getFullYear() - ano_nascimento) < 18) {
        informacao = 'menor de idade'
    } else {
        informacao = 'MAIOR de idade'
    }

    return informacao
}

//mostrando no console diversas chamadas à função mmaioridade_pessoa()
console.log(maioridade_pessoa(1991))

console.log(maioridade_pessoa(2005))

console.log(maioridade_pessoa(2002))

console.log(maioridade_pessoa(2004))
