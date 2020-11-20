
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min  //captando um numero aleatorio entre dois numeros
    return Math.floor(valor)   //retornará um valor aleatorio, que foia rrendodado para baixo, usando a funcao de Math, a Math.floor()
}

//cirada uma variavel let e setado o valor 0 nela
let opcao = 0

//A estrutura de repetição while, enquanto o conteudo presente dentro dos parenteses de while, for true, o laço irá se repetir indefinidamente.
while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)    //gerando um numero aleatorio entre -1 e 10 e setando seu valor à variavel let
    console.log(`A opcao achada foi ${opcao}`)   //imprimindo no console o valor atualzaido da variavel opcao
}

//OBS: e enquanto o valor presente na variavel opcao for DIFERENTE DE -1, o while irá continuar a repetir. Sendo -1, ele se encerra.

console.log('programa terminou!')   //assim que o laço while for terminado, a frase é mostrada.
