/*  Faça um programa que entre com três números, faça a média aritmética e mostre o resultado. */

//função declarada de forma literal - bem comum
function media(numero1, numero2, numero3) {

    return ((numero1 + numero2 + numero3) / 3).toFixed(2)
}


//testando a função criada e exibindo seu retorno na tela do console
console.log(media(1, 2, 3))
console.log(media(50, 20, 30))
console.log(media(-2, 2, 3))
console.log(media(1000, 200, 300))
console.log(media(33, 66, 33))
console.log(media(-20, -40, -30))

//fazendo a função com uso de arrow function e a armazenando em uma variavel, já que em javascript, as funções podem ser consideradas um tipo de dado

const media2 = (valor1, valor2, valor3) => ((valor1 + valor2 + valor3)/ 3).toFixed(2)

//testando a função media2 criada e mostrando no console
console.log(media2(30, 60, 30))
console.log(media2(-28 -9, -30))






