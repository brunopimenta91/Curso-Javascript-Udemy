const valores = [23, 4,-88, 0.98, 1]   //rray declarado literalmente
console.log(valores[0], valores[4]) //cessando elementos do array diretamente, com a declaração do nome do array e a seguir o indice elemento que se quer 

console.log(valores[5])   //acessando um elemento de indice do array que não esteja em uso

valores[5] = 10  //adicionando um valor qualquer a um elemento do array
console.log(valores)  //°le foi adicionado ao array original

valores[10] = -666   //se adicionarmos um valor a um elemento de indice superior ao ultimo ocupado no array, o javascript pulará os elemento anteriores ao indice escolhido
console.log(valores)

console.log(valores.length)  //variavel length informa quantos elementos existem no array

//rrays em jvascript podem aceitar valores heterogeneos, podendo receber numeros, booleanos, strings, objetos, etc.
valores.push({id: 3}, false, null, 'teste', -9)   //função push() - possibilita adicionar multiplos elementos ao um array em uma unica chamada
console.log(valores)

console.log(valores.pop())  //exclui o ultimo elemento presente no array 
console.log(valores)

delete valores[0]   //exclui um elemento de indice qualquer do array
console.log(valores)   //mostrando os valores do array como um todo


console.log(typeof valores)   //um array em javascript é do tipo object










