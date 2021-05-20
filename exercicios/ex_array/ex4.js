/*  Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores. */

let lista_idades = [19, 30, 12, 11, 9, 2, 99, 87]   //array criado de forma literal

//função anonima armazenada em uma const, que recebe um array como parametro
const verifica_maioridade = function(array_idades) {

    //função interna, que teve uso de arrow function, que usa operador ternário, vendo se uma idade passada é acima de 18 ou abaixo, passando a classificação em texto 'menor de idade' ou 'adulto'
    const adulto = idade => idade < 18 ? 'menor de idade': 'adulto'

    return array_idades.map(adulto)
}


console.log(verifica_maioridade(lista_idades))
console.log(verifica_maioridade([18, 3, 12, 22]))
