//Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

const repete_elemento = function(elemento, repeticoes) {
    const array_repeticoes = []

    for(let contador = 1; contador <= repeticoes; contador++) {
        array_repeticoes.push(elemento)
    }

    return array_repeticoes
}

//testes da função com uso da função anaonima armazenada numa constante
console.log(repete_elemento('bruno', 4))
console.log(repete_elemento(3, 2))
console.log(repete_elemento(null, 10))
console.log(repete_elemento([], 5))
console.log(repete_elemento(Math.PI.toFixed(2) , 5))
