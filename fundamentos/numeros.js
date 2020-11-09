const peso1 = 1.0  //variavel ou constante numerica

const peso2 = Number('2')  //representando um numero numa constante, com a conversão de uma string em numero

console.log(peso1, peso2)  //mostrando os valores no console

console.log(Number.isInteger(peso1)) //função 'isInteger()' verifica se o valor do constanteé um numero inteiro ou não. Se sim, retorna true. Se não, não é e retorna false

const avaliacao1 = 9.971
const avaliacao2 = 6.676

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))  //fixando as casas decimais retornadas pela const media - funcao toFixed(2)
console.log(media.toString())  //convertendo um number em string, atraves da funcao toString()
console.log(media.toString(2))  //convertendo um numero em binario

console.log(typeof media)  //verificando qual é o tipo do dado presente na varivel - com a função typeof

