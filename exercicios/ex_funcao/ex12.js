//Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.

const objeto_estudo = {
    nome: 'abajur',
    preco: 12.00,
    peso: 2.4
}

const objeto2 = {
    numero_onibus: 457,
    nome_linha: 'Del castilho - Ipanema',
    valor_passagem: 4.05
}


let extrai_atributo = function(objeto, atributo_objeto) {
    delete objeto[atributo_objeto]

    const objeto_copia = objeto

    return objeto_copia 
}

console.log(extrai_atributo(objeto_estudo, "nome"))
console.log(extrai_atributo({id: "1234", nome: 'prego', material: 'ferro'}, "material"))

const objeto_sem_atributo = extrai_atributo(objeto2, 'nome_linha')
console.log(objeto_sem_atributo)

/*IMPORTANTE!!!!
A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.     */

console.log(Object.is(extrai_atributo(objeto2, 'nome_linha'), objeto_sem_atributo))    //retorna true ou false
 




