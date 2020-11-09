const escola = 'cod3r'  //decalração de uma constante que recebe um string como conteúdo.

console.log(escola.charAt(4))  //função das strings que retorna o character presente no indice pedido.

console.log(escola.charAt(8))  //se for requisitado o char da string, mas que esse não esteja sendo usado, retorna um espaço nulo.

console.log(escola.charCodeAt(3))  //metodo que retorna o valor do char escolhido, mas na tabela unicode.

console.log(escola.indexOf('d'))  //varre a string e verififca se um determinado character existe nela. Se sim, fala qual o indice ele existe. Se não, retorna '-1'

console.log(escola.substring(2))   //mostra a string a partir do indice escrito.

console.log(escola.substring(1, 3))  //mostra a string a partir do indice escrito, até o segundo, mas sem inclui lo.

console.log('escola '.concat(escola).concat("!!!"))  //concatena strings, strings com conteudos de variaveis/constantes

console.log(escola.replace(3, 'X'))  //substitui um determinado char por outro escolhido.
console.log(escola.replace('c', 'C'))

console.log('Ana, Joana, Mariana'.split(','))  //divide o conteudo de uma string, a partir de um determinado simbolo 

