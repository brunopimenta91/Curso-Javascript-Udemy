
console.log(typeof Object)   //função
console.log(typeof new Object())  //instanciando um objeto a partir da função Object.
console.log(typeof new Object)  //os parenteses pode ser omitidos, nesse instanciamento de objeto


const Cliente = function() {}   //criada uma função vazia e armazenada em uma constante
console.log(typeof Cliente)  //função
console.log(typeof new Cliente)  //instanciando de um objeto da função criada e armazenada na constante Cliente.

class Produto {}     //EcmaScript 2015 versão mais atual - Classe em Javascript é uma forma diferente de criar uma função
console.log(typeof Produto)   //funcao
console.log(typeof new Produto())   //instancia de objeto a partir da classe Produto.


//Quem cria OBJETOS em JAVASCRIPT SÃO FUNÇÕES! Classe é so um detalhe de codigo, mas na real é uma função
