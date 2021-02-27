/* 25) Escrever um programa para exibir os números de 1 até 50 na tela.  */

//função arrow sem parametros, armazenada em uma constante
const exibicao_dos_50 = () => {

    //usando a estrutura de repetição FOR
    for(let contador = 1; contador <= 50; contador++) {
        console.log(`NUMERO ${contador}`)
    }
}

//chamada à função exibicao_dos_50()
exibicao_dos_50()

