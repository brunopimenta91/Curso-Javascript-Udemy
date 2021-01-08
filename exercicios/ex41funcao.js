/* Crie uma função que recebe um numero e mostra a tabuada de zero ate o dez desse numero */

//função arrow, cum um parametro, inserida em uma constante
const numero_tabuada = (numero) => {
    let resultado = 0

    console.log(`tabuada de ${numero}`)

    for(let contador = 0; contador <= 10; contador++) {
        resultado = numero * contador
        console.log(`${numero} X ${contador} = ${resultado}`)
    }

}

//chamadas diversas à função armazenada na constante numero_tabuada
numero_tabuada(5)

numero_tabuada(9)

