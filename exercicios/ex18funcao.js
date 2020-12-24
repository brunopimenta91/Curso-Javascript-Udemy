/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’  */

const lista_numeros = function (numero_digitado) {
    let frase 

    switch(numero_digitado) {
        case 0:
            frase = 'zero'
            break;
        case 1:
            frase = 'um'
            break;
        case 2:
            frase = 'dois'
            break;
        case 3:
            frase = 'três'
            break;
        case 4:
            frase = 'quatro'
            break;
        case 5:
            frase = 'cinco'
            break;
        case 6:
            frase = 'seis'
            break;
        case 7:
            frase = 'sete'
            break;
        case 8:
            frase = 'oito'
            break;
        case 9:
            frase = 'nove'
            break;
        case 10:
            frase = 'dez'
            break;
        default:
            frase = 'numero fora do intervalo entre 0 e 10'
            break;
    }

    return frase
}

//diversas chmadas à função arrow presente na constante lista_numeros.
console.log(lista_numeros(3))
console.log(lista_numeros(100))
console.log(lista_numeros(-12))
console.log(lista_numeros(8))
