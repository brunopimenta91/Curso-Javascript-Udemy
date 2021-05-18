/*  Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.  */


const verfica_sorteado = function(numero_usuario) {
    let frase_sorteio;

    const numero_gerado = Math.floor(Math.random() * 10 + 1)

    if(numero_usuario == numero_gerado) {
        frase_sorteio = `Parabéns! O número sorteado foi o ${numero_gerado}`
    } else {
        frase_sorteio = `Que pena! Você digitou ${numero_usuario} número sorteado foi o ${numero_gerado}`
    }

    return frase_sorteio
}


//testando a função criada
console.log(verfica_sorteado(9))
console.log(verfica_sorteado(1))
console.log(verfica_sorteado(5))
console.log(verfica_sorteado(3))

/*  
Math.max([x[,y[,…]]])
Retorna o maior dentre os parâmetros recebidos.
Math.min([x[,y[,…]]])
Retorna o menor dentre os parâmetros recebidos.
*/