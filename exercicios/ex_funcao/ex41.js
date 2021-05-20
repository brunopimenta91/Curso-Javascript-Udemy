/* ) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.  */


const lista_valores = [23, 2, 3, 9, 67, 1]


const funcao_primeira = function(array_lista, elemento_produto) {

    const calculo_produto = (valor, elemento_produto) => valor * elemento_produto
    
    return array_lista.map(calculo_produto)
}

console.log(funcao_primeira(lista_valores, 2))


//ESTA INCOMPLETA E ERRADA. REFAZER


