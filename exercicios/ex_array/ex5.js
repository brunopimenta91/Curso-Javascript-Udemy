/*  Faça uma função	que	recebe um valor inteiro	e verifica se o	valor é	positivo, negativo ou zero.	 
A função deve retornar 1 para valores positivos, -1	para negativos e 0 para	o valor	0.	 */


let vetor_numeros = [-10, 20, 0] //-23, 19, 2, -34, 3]

const classifica_numero = function(lista_numeros) {

    const classe_numero = numero => {
        let frase 

        if(numero == 0) {
            frase = 'zero'
        } else if(numero < 0) {
            frase = 'negativo'
        } else {
            frase = 'positivo'
        }

        return frase
    } 

    return lista_numeros.map(classe_numero)
}


//testando a função
console.log(classifica_numero(vetor_numeros))
console.log(classifica_numero([-100, 0, -2, 30, 2322]))