//°xercicio que irá comparar as estruturas do while, em relação ao for, em javascript

//Estrutura de repeticao WHILE
let contador = 1   //declaracao de uma variavel

//expressao que testa o while 
while(contador <= 10) {
    console.log(`contador = ${contador}`)     //mostrando no console o valor atual presente na variavel contador

    contador++     //incremento em uma unidade, ao valor presente na variavel let contador
}



//Estrutura de repeticao FOR

/*for se divide em tres partes: 
    declaração:   let i = 1
    expressao (que testa a condição do for):  i <= 10
    incremento:     i++

    Essas 3 partes em uma unica linha de codigo, envoltas por for():   for(let i = 1; i <= 10; i++) {}
*/

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}


//estrutura for percorrendo um array
const notas = [2.3, 3.4, 6, 2.1, 9, 10]   //delcaração literal de um array

for(let i = 0; i < notas.length; i++) {
    console.log(`nota ${i} = ${notas[i]}`)
}






