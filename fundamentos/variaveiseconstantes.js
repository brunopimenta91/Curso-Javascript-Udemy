//declaração de uma variavel var, de nome 'a', sendo atribuida a ela o valor inteiro 3;
var a = 3

//criação de uma variavel let (nova forma vinda do ECMA script 2015)
let b = 4

var a = 300
 b = 40

console.log(a, b)

a = 3000
b = 100

console.log(a, b)  

/*Como podemos ver na compilação do código, a variavel var a, assim como a variavel let b, podem ter seus valores 
alterados. Ambos podem receber qualquer tipo de dados aceitos em Javascipt*/

//declaração de constante em javascript, pela declaração 'const'
const c = 5
 //c = 50   - Se por teste, quisessemos atribuir outro dado a constante c, o código apresentaria erro, pois uma variavel de tipo const tem seu valor imutável. IMPORTANTE!!
console.log(c)