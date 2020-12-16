/* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

//função do tipo 'named function expression' - quando uma função com nome, é armazenada em uma variavel let ou constante com nome também. Forma incomum de declarar função, mas possivel.

//usei com a função Math.pow()   - tentar fazer na mão
const numero_potenciado = function potencia(base, expoente) {
    return Math.pow(base, expoente)
}

console.log(numero_potenciado(2, 3))


