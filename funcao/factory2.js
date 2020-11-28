//função factory 2 - criada no exercicio pelo video da aula

//função factory, com dois parametros passados: nome e preço
function criarProduto(nome, preco) {
    //retorno da função será um objeto, com 3 atributos: nome, preço e desconto.

    return {
        nome,         //nome: nome - meio alternativo de declarar e setar o atributo que recebe o valor passado no parametro
        preco,        //por só preco é possivel, pois o nome do atributo é o mesmo que foi passado como parametro
        desconto: 0.1    //atributo interno do objeto, com valor fixo de 0.1
    }
}


//mostrando e ao mesmo tempo criando objetos, a partir da chamada da função factory criarProduto(parametro1, parametro2)

//3 objetos criados, por meio da função factory (que cria objetos), de nome criarProduto()
console.log(criarProduto('telefone fixo', 90))
console.log(criarProduto('pilha D alcalina', 20,50))
console.log(criarProduto('chocolate kitkat', 2))

/*  função factory criada por mim, Bruno Pimenta

function moldandoPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

const pessoa1 = moldandoPessoa('bruno', 'moura')

console.log(pessoa1)

*/

