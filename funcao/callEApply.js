
//eclaração de uma função de forma literal, com dois parametros, com valores padrao definidos.

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 - imposto)}`
}

//Criando um objeto

const produto = {
    /*4 atributos definidos: Os 3 primeiros recebem valores e o ultimo recebe uma função. Tal atributo getPreco, por ter o mesmo nome da função, a declaracao é uma só */
    nome: 'notebook',
    preco: 5000,
    desconto: 0.25,
    getPreco           //metodo alternativo de atribuir a função getPreco ao atributo getPreco:     getPreco: getPreco

}


//definindo certos atributos no escopo global
global.preco = 100
global.desconto = 0.1

//acessando a função getPreco() 
console.log(getPreco())

//acessadno a função getPreco, a partir do objeto produto
console.log(produto.getPreco())


//₢riando outro objeto

const carro = {preco: 100000, desconto: 0.20}


//dois metodos alterantivos para acessar uma função: pela função call() e pela função apply()
console.log(getPreco.call(carro))       //acesso A funcao getPreco, atraves da função call()

console.log(getPreco.apply(carro))      //acesso A funcao getPreco, atraves da função apply()


//principal diferença entre a função call() e a função apply(), é o modo como os parametros em ambas sao passados!!!!!  IMPORTANTE

/* nos parametros seguem a ordem: parametro 1 é o objeto a ser acessado, seja global, carro, produto, etc,/ parametro 2
e 3 serao os parametros passados para função getFuncao(imposto, moeda)  */
console.log(getPreco.call(carro, 0.2, 'U$$'))   // //os dois ultimos parametros sao passados como parametros normais, seguidos um do outro

console.log(getPreco.apply(produto, [0.4, 'XX$']))   // //os dois ultimos parametros sao passados como parametros normais, MAS dentro de um ARRAY. jA O OBJETO A SER ACESSADO É passado como o primeiro parametro normalmente.

