/* Em javascript, é possivel resgatar argumentos passados em uma função, atraves de um array interno, presente em todas as funções criadas em Javascript, o array arguments[], recurso interno das funçãos da linguagem */

//₢riada função de forma literal, sem parametros
function soma() {
    let soma = 0    //criada uma variavel interna na função

    //atraves de uma estrutura de repetição FOR IN, iremos varrer o array arguments, em todos os seus elementos.
    for(i in arguments) {
        soma += arguments[i]   //a variavel interna soma irá somar e guardar o valor presente no elemento de indice especificado do array arguments
    }

    return soma     //a função retornará o valor presente na variavel soma
}

//chamadas diversas a função soma() - é possivel serem passados qualquer tipo de dado, como parametros: numeros, booleanos, strings.

console.log(soma())   //em parametros, o array arguments estará vazio. Logo a variavel soma será 0
console.log(soma(2))    //retornará o valor numero 2, numero passado como argumento na chamada da função
console.log(soma(2, 67))
console.log(soma(2, 3.4, 33, 4.1, 0.5))
console.log(soma(2, 3, 'teste'))
console.log(soma(2, true))  //soma o valor 2 mais o valor 1 (já que em javascript, true pode se passar como 1)



//recurso disponivel, mas tem alternativa, do recurso REST/ SPREAD, dependendo do contexto
