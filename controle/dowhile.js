
function gerandoInteiroAleatorio(inicio, final) {
    const valor = Math.random()  * (final - inicio) + inicio
    return Math.floor(valor)
}

let numero = 0

/*estrutura de repetição DO WHILE - pouco usada na prática em programas, mas viavel de ser usada. Grante ao menos 1 interação, independente se a relação dentro do while é TRUE ou FALSE*/
do {
    console.log(`numero gerado foi: ${numero}`)
    numero = gerandoInteiroAleatorio(0, 10)
} while (numero != 0)   //A ESTRUTURA DO WHILE É A unica estrutura de controle que o bloco de codigos executaveis vem ANTES da expressao dentro dos parantesese do while

console.log('O while acabou!')    //Foi encerrado o laço, ai uma mensagem mostrando isso na tela que o laço acabou.



