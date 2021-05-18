/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */

const conta_palavras = function(frase) {
 
    let conta_espacos = frase.indexOf(' ') + 2

    return conta_espacos
    
}

console.log(conta_palavras("sujeito"))


//não esta correta. refazer