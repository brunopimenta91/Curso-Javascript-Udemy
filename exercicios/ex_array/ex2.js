/*  Faça um programa que leia um vetor com 5 nomes, e imprima estes nomes pela ordem em que foram digitados.   */

// array declarado de forma literal - forma bem comum em javascript
let nomes = ['manuel', 'lana', 'patrick', 'bruna', 'nuno']


//outra forma de declarar array é usando a função Array() que cria um objeto do tipo array (array na liguagem é um tipo de dado)   -   forma mais uncomum, mas possivel
let nomes_segunda = new Array('vanessa', 'luna', 'joao', 'tiago', 'Rafaela')


// função anonima armazenada em uma constante
const ordem_nomes = function(array_nomes) {
    
    //função criada que recebe dois parametros, o nome do elemento do array e seu indice, retornando uma frase com eles dois.
    let frase_nomes = (nome, indice) => `${indice} - ${nome}`;

    return array_nomes.map(frase_nomes)   //retorno da função principal será uma chamada do array recebido como parametro com o metodo map(), com a função interna callback frase_nomes().

}


//testando a função criada
console.log(ordem_nomes(nomes))
console.log(ordem_nomes(nomes_segunda))
console.log(ordem_nomes(['hernan', 'flavia', 'luciano']))

