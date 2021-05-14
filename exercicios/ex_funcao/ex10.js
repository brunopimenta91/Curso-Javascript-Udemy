//Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

const repete_mais = function(vezes) {
    let fileira_mais = ''
    for(let contagem = 0; contagem < vezes; contagem++) {
        fileira_mais += `+`    
    }

    console.log(fileira_mais)
}

repete_mais(3)
repete_mais(0)
repete_mais(20)
repete_mais(100)

/*   
Ou quando tiramos o console.log interno à função e o colocamos fora dela, para mostrar o retorno da função.
console.log(repete_mais(3))
console.log(repete_mais(0))
console.log(repete_mais(20))
console.log(repete_mais(100))
*/
