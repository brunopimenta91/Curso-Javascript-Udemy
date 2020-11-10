let valor   //variavel declarada mas NÃO inicializada - possui endereço de memoria
console.log(valor)    //retorna 'undefined'



valor = null    //ausencia de valor  - não possui endereço de memoria alocado
console.log(valor)   //retorna 'null'
// console.log(valor.toString())  // dará erro, pois não se dá pra ter acesso a funções, de uma variavel que não foi sequer inicializada com algum valor ou referencia 

const produto = {}   //objeto vazio e definido
console.log(produto.preco)    //o tentar se acessar um atributo não declarado de um objeto vazio, se retorna undefined, pois tem uma referen cia, mas a variavel sequer foi declarada,

produto.preco = 3.50   //definindo o atributo preco do objeto vazio, dinamicamente.
console.log(produto)   //mostrara o objeto e seus atributos

produto.preco = undefined     //pratica ruim, evite forçar a declaracao de variaveis com o valor 'undefined'
console.log(!!produto.preco)  //retornará falso, pois undefined pode ser como false

delete produto.preco   //se quisermos eleminar o atributo e seu valor de um objeto. use 'delete', ao inves de definir o valor do atributo para 'undefined'
console.log(produto)

produto.preco = null    //sem valor
console.log(produto.preco)
console.log(produto)

//OBS - SE QUISER ZERAR UMA REFERENCIA DE VALOR, seja em variavel ou atributo, use NULL. Deixe que o sistema use undefined


