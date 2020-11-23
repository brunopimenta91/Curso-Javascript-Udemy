
//estrategia 1 para gerar valor padrao em função
function soma1(a, b, c) {
    //variavel local irá receber o valor passado como parametro na chamada da função. Se nao for valor valido, será setado o valor numerico 1
    //estrategia famosa e presente ainda hoje
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c    //retornará o valor da soma das tres variaveis

    //tal estrategia aparesenta um erro, pois o valor numerico 0, retorna como false, o que irá criar um bug na função
}


console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))  //A ultima chamada da soma1(0, 0, 0), com 3 parametros numericos 0 passados na chamada, cria um bug


//estrategia 2 para gerar valor padrao em função
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1   //opcao 1 - verificando se o parametro passado é undefined. Se nao, atribui a variavel a, o valor passado. Se não, passa o valor numerico 1 
    b = 1 in arguments ? b : 1    //opcao 2 - verificando se o parametro passado existe como elemento no arry interno da funcao, o arguments[]. Se sim, atribui a variavel a, o valor passado. Se não, passa o valor numerico 1 
    c = isNaN(c) ? 1: c           //opcao 3 - verificando se o parametro passado é um Not a Number, usando a função interna, isNaN(parametro). Se nao, atribui a variavel a, o valor passado. Se sim, passa o valor numerico 1 

    //OBS: Melhor opção é a terceira.

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))   //tais alternativas descritas são melhores que as da estrategia 1, mas tbm sucetiveis a bugs



//estrategia 3 - valor padrão para parametros - recurso vindo do EcmaScript 2015
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))    //em quesito valores numericos, o recurso é a melhor opção, mas À outros tipos de dados, melhor opção é usar o Javascript puro, a opção 3 da estrategia 2 é a mais segura







