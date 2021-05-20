//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

//criada a função usando arrow function, com uso do metodo math.pow() e o retorno sendo armazenada em uma constante
const potencia = (base, expoente) => Math.pow(base, expoente)


//testando a função e mostrando na tela do console
console.log(potencia(2, 4))
console.log(potencia(3, 3))
console.log(potencia(1, 20))
console.log(potencia(5, 5))
