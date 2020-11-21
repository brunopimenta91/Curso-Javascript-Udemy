//estrutura de repetição FOR IN

/* o FOR IN percorre os atributos de uma certa estrutura, podendo ser aplicado em arrays ou objetos, em Javascript  */


//usando uma estrutura de repetição for in, para ter acesso a lista de INDICES do ARRAY NOTAS

const notas = [2.3, 7.8, 8.9, 9, 10, 1.2]   //array criado literalmente

//i em in, percorrerá os elementos corrrespondentes (atraves de seus indices) do array que queremos.
for(let i in notas) {
    console.log(i, notas[i])
}


//FOR IN percorrendo os atributos de um OBJETO

//₢riando um objeto literalmente
const pessoa = {
    nome: 'joana',
    sobrenome: 'magalhães',
    idade: 29,
    peso: 89
}

//usando uma estrutura de repetição for in, para ter acesso a lista de atributos do objeto pessoa
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

