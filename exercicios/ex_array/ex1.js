//verifiquei o tipo que Array é e que uma instancia de objeto a partir do new Array é.
console.log(typeof Array, typeof new Array)

//instanciando um array pelo usando 'new' e a armazenando em uma variavel  - POUCO USUAL
let nomes_contribuintes = new Array('alcina', 'alfredo', 'vanderlei', 'Yolanda')
console.log(nomes_contribuintes)

//atribuindo um array a variavel anterior, usando a notação com colchetes - FORMA MAIS COMUM DE SER USADA!
nomes_contribuintes = ['marilinda', 'mario jorge', 'lucinda', 'marcelina', 'nilton']
console.log(nomes_contribuintes)

//acessando um elemento de indice especifico do array, usamos a notacao de colchetes com o numero do indice dele
console.log(nomes_contribuintes[0])
console.log(nomes_contribuintes[1])
console.log(nomes_contribuintes[2])
console.log(nomes_contribuintes[3])
console.log(nomes_contribuintes[4])

//se eu tentar acessar um elemento do array que não foi definido no array ele retornará 'undefined'
console.log(nomes_contribuintes[5])      //undefined

//inserindo um elemento no array de forma dinamica, atraves da notação com colchetes e num elemento de indice especifico (e naõ definido antes).
nomes_contribuintes[5] = 'Laurinda'
console.log(nomes_contribuintes)

//inserindo um elemento no array atraves da função push(), o inserindo no final do array
nomes_contribuintes.push('Artur')
console.log(nomes_contribuintes)

console.log(nomes_contribuintes.length)    //atributo 'length', que retorna o total de elementos do array

//inserindo um elemento num indice bem a frente do ultimo elemento anteriormente existente no array
nomes_contribuintes[16] = 'Carmelita'
console.log(nomes_contribuintes.length)   //verificando o tamanho atual do array

console.log(nomes_contribuintes[12] === undefined)   //verificando o conteudo de um dos elementos do array que não foi atribuido valor nenhum - retorna 'undefined'.

console.log(nomes_contribuintes)   //retorna os valores definidos (do indice 0 ao 6 e o de indice 16) e os não definidos (de 7 ao 15).  Nos não definidos mostra na tela do console "9 empty items"

//METODO sort() - altera o array original, reordenando os elementos do mesmo.
nomes_contribuintes.sort()
console.log(nomes_contribuintes)

//excluindo dinamicamente um elemento do array
delete nomes_contribuintes[2]
console.log(nomes_contribuintes[2])    //o elemento que teve o valor excluido retornará "undefined"
console.log(nomes_contribuintes[3])    //o elemento seguinte NÃO TOMA o lugar do elemento do array excluido

//METODO splice()  - permite excluir / ou inserir elementos no array
let nomes_operarios = ['mauro', 'afonso', 'manuel']       //array definido com uso de colchetes
nomes_operarios.splice(1, 2, 'elemento1', 'elemento2', 'elemento3', 'elemento5')     //os dois primeiros parametros do metodo são respectivamente: o indice do array, o total de elementos a excluir. Ja a partir do terceiro, serã os elementos que devem ser inseridos no array .
console.log(nomes_operarios)

nomes_operarios.splice(4, 1)
console.log(nomes_operarios)


