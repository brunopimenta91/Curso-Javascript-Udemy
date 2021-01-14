//Faça um programa que entre com três números, faça a média aritmética e mostre o resultado.

//função anonima armazenada na constante media_de_3. Foram inseridos nos parametros, valores padrao, para caso o parametro seja passado em numero melhor que 3
const media_de_3 = function (numero1 = 0, numero2 = 0, numero3 = 0) {

    let media = (numero1 + numero2 + numero3) / 3

    return media
}


//mostrando na tela do console, diversas chamadas à função media_de_3(), usando console.log()

console.log(media_de_3(1, 2, 3))

console.log(media_de_3(10, 20))

console.log(media_de_3(3))
