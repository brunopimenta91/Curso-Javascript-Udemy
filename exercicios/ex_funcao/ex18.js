/* crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
💡 A média simples é o resultado da soma de todos os números dividido pela quantidade de números.   */
//PROGRAMANDO CÓDIGO DE FORMA IMPERATIVA

const lista_numeros = [1, 2, 3, 4, 5]
const lista_numeros2 = [10, 10, 10, 0, 70]
const lista_numeros3 = [-10, -20, 30, 40, 20]

const soma_numeros = function (lista) {
    let somatotal = 0

    for(let contador = 0; contador < lista.length; contador++) {
        somatotal = somatotal + lista[contador]
}
     
    return somatotal
}

//testes na função
console.log(soma_numeros(lista_numeros))
console.log(soma_numeros(lista_numeros2))
console.log(soma_numeros(lista_numeros3))



// PROGRAMANDO CÓDIGO DE FORMA DECLARATIVA  - COM FUNÇÃO ANONIMA
const somando_numeros = function(array_escolhido) {

    return array_escolhido.reduce(soma, elemento_inicio)

}  

//exemplo com função ARROW
// const somando_numeros = (array_escolhido) => array_escolhido.reduce(soma, elemento_inicio)
 

//testes na função  - COM FUNÇÃO ANONIMA
console.log(soma_numeros(lista_numeros))
console.log(soma_numeros(lista_numeros2))
console.log(soma_numeros(lista_numeros3))


//PROGRAMANDO CÓDIGO DE FORMA DECLARATIVA   - COM FUNÇÃO ARROW
const soma_numerais = (array_lista) => array_lista.reduce(total, numero_inicial)

//testes na função  - COM FUNÇÃO ANONIMA
console.log(soma_numerais(lista_numeros))
console.log(soma_numerais(lista_numeros2))
console.log(soma_numerais(lista_numeros3))  
