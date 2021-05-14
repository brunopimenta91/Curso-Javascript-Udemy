/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */
/* MEUS EXMEPLOS SERÃO COM ARRAYS DE OBJETOS */

// exemplo 1 - retornará 239.99
const array_produtos = [
    {nome: "calça", categoria: "Informação", preco: 89.99},
    {nome: "jogo", categoria: "Entretenimento", preco: 150}
]

// exemplo 2 -  retornará 34599.89
const despesasTotais = [
    {nome: "conta agua", categoria: "gasto fixo", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "gasto flexivel", preco: 30999.90}
] 
    
// exemplo 3 -  retornará  2.899.89
const conta_casa = [
    {nome: "conta agua", categoria: "gasto fixo", preco: 599.99},
    {nome: "conta internet", categoria: "gasto flexivel", preco: 199.90},
    {nome: "conta gas", categoria: "gasto fixo", preco: 100.00},
    {nome: "aluguel", categoria: "gasto fixo", preco: 2000.00}
]

//fazendo de a CODIFICAÇÃO de FORMA DECLARATIVA
const seleciona_preco = objeto => objeto.preco   //função que seleciona só os atributo preco dos objetos do array

const soma_preco = (soma, preco) => soma + preco  //função que soma os valores dos preco dos objetos do array

/*Uma função arrow, armazenada numa constante, que tem como parametro unico um array (se espera receber esse tipo de objeto de Javascript). Internamente, usando essa esse array recebido, foi usado o metodo map(), que passa por todos os elementos do array, com parametro a função callback seleciona_preco. Do retorno desse map (que é um array), usamos o metodo reduce(), com paramentro interno a função callback soma_preco, que soma os valores presentes no array resoltante que do map anterior*/
const soma_produtos = produtos => produtos.map(seleciona_preco).reduce(soma_preco)

//testes da função
console.log(soma_produtos(array_produtos))
console.log(soma_produtos(despesasTotais))
console.log(soma_produtos(conta_casa))  