//Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

//primeiro array criado de forma dinamica
const array_variado = [12, "eu sei", true, undefined, 56, "230", [], 9.921]  

//segundo array criado de forma dinamica
const array_variado2 = ["atlético-MG", 890, -45, null, 0.99, "12000", [2, 6, 9], 12.1, 8] 

const filtra_numeros = function(array_passado) {

    let array_so_numeros = array_passado.filter(atributo => typeof atributo === "number")

    return array_so_numeros
}

console.log(filtra_numeros(array_variado))


//exemplo da função criada com o uso de arrow functions e do metodo do objeto Array, filter()
const filtragem_numeral = array_dado => array_dado.filter(atributo => typeof atributo === "number")

console.log(filtragem_numeral(array_variado2))