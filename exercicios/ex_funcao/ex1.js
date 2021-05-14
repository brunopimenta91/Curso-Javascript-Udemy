
//Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

let mensagem = function(nome) {
    return `Olá, sr(a) ` + nome + `!`
}
console.log(mensagem('felipe'))


//exemplo da função usando arrow function
let mensagem2 = nome => `Olá, sr(a) ` + nome + `!`
console.log(mensagem2('monique'))