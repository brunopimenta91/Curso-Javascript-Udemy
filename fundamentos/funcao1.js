//funcao SEM RETORNO

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(20, 12)        //chamada da funcao imprimirSoma(20, 12)

imprimirSoma(2)  //chamada com 1 parametro so, sendo que são necessarios 2. Nesse caso retornará NaN
imprimirSoma(2, 10, 2220, 1, 2, 0.4)   //com mais parametros passados do que a chamada da função foi configurada. so leva em conta os 2 primeiros (que seão usados pela funcao. O restante é ignorado)


//funcao COM RETORNO
//o parametro b da função, apresenta um valor padrão já definido, caso não seja passado nenhum valor pra esse parametro - recurso vindo do EcmaScript 2015
function soma(a, b = 0)  {
    return a + b     //retorna o valor da soma de a e b
}

console.log(soma(2,3))    //imprime no console diratamente uma chamada da funcao soma()
console.log(soma(2))   //se for feita uma chamada so com o parametro a passado, o b será setado o valor 0, ja que foi definido um valor padrão.

console.log(soma())  //chamada da funcao soma sem nenhum parametro, ai retornará um NaN




