
const imprimirResultado = function(nota) {
    //nota foi arredondada para baixo, com a função de Math, a Math.floor()
    // switch não retorna um valor true ou false. Podendo ser numero, caracteres etc.
    switch (Math.floor(nota)) {
        case 10:  //caso sejam mais de um valor na sequencia e se forem de igual sequencia de codigo
        case 9:
            console.log('Quadro de honra')
            break   //é preciso por break para poder sair do laço e nao continuar o funcionamento dos demais
        case 8: case 7:
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log('recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado')
            break
        default:
            console.log('nota INVÁLIDA!!!')
    }
}


//chamadas à função imprimirResultado()

imprimirResultado(2)
imprimirResultado('EUE')
imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(8.3)





