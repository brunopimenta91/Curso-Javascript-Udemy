
console.log('1- ', '1' == 1)  // == é um operador de comparação binaria, o 'são iguais' - a comparacao é verdadeira, pos so se preocupa com o valor.

console.log('2- ', '1' === 1)   // == é um operador de comparação binaria, o 'são ESTRITAMENTE iguais' - a comparacao é FALSA, pos se preocupa com o valor E TAMBEM com o tipo dos dois operandos.

console.log('3- ', '3' != 3)  //retornará falso, pois so se preocupa com o valor dos operandos

console.log('4- ', '3' !== 3)  // o 'estritamente diferentes', e retornará FALSO, pois se preocupa com o valor dos operandos E TAMBEM COM O TIPO DE DADOS DE AMBOS.

console.log('5- ', 3 < 2)
console.log('6- ', 3 > 2)
console.log('7- ', 3 <= 2)
console.log('8- ', 3 >= 2)

const data1 = new Date(0)
const data2 = new Date(0)
console.log('9 - ', data1 === data2)
console.log('10 - ', data1 == data2)
console,log('11- ', data1.getTime() === data2.getTime())

console.log('12- ', undefined == null)
console.log('13- ', undefined === null)








