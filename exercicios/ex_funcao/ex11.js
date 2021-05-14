//Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

let lista_primeiro_ultimo = function(array_elementos) {
    let array_selecionados = []

    array_selecionados.splice(0, 0, array_elementos[0], array_elementos[array_elementos.length -1])
    
    return array_selecionados
}

//testes da função criada
console.log(lista_primeiro_ultimo(['abcd', 99.88, NaN, 0.555, -123.99, 'eu acabei de ver a Eva']))
console.log(lista_primeiro_ultimo([true, 2, 3]))
console.log(lista_primeiro_ultimo([true, -333, false, "AHUHUAHUAUHAUH"]))
console.log(lista_primeiro_ultimo([-99, undefined, 7888, 0.4, [3, 2, 1]]))

