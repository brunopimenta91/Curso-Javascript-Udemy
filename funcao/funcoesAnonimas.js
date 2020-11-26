
//função anônima - É uma função sem nome

//função anomina inserida em uma constante (a constante soma)
const soma = function (x, y) {
    return x + y
}


/*uma função anonima, definida e guardada em uma constante (a imprimirResultado)  
A função presente na cosntante imprimirResultado, tem como parametros: a, b e uma função (localizada no parametro operacao). Caso, na chamada da função, NÃO SEJA PASSADA nenhuma função como parametro, tal parametro tem como valor padrão a função presente na constante soma, que irá somar os dois parametros anteriores*/
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}


imprimirResultado(3, 4)  //chamada da função imprimirResultado, com dois parametros passados. O parametro operacao receberá o valor padrão setado, que irá somar os dois parametros passados.

imprimirResultado(10, 33, soma)   //chamada a função imprimirResultado, com 3 parametros passados, sendo o ultimo, de uma função ANONIMA armazenada na constante soma


/*chamada a função imprimirResultado, com 3 parametros, sendo o ultimo, uma função ANONIMA passada na chamada da função, que subtrai os dois primeiros parametros */
imprimirResultado(10, 90, function (x, y) {
    return x - y
})


/* criando uma função ANONIMA ARROW (obs: toda função arrow é OBRIGATORIAMENTE ANONIMA) e a passando como parametro da chamada da função imprimirResultado. Função tal que irá multiplicar os dois primeiros parametros */
imprimirResultado(2, 4499, (num1, num2) => num1 * num2 )


//inserindo uma função ANONIMA em uma atributo de um OBJETO
const pessoa = {

    //função anonima passada no atributo interno falar do objeto pessoa
    falar: function () {
        console.log('Ups!')
    }

    /*    modo alternativo (e novo) de atribuir uma função anonima a um atributo
    falar() {
        console.log('Ups!')
    }
    */



}










