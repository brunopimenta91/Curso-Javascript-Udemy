//armazenando uma funcao dentro de uma variavel (ou constante)
//₢riada a constante, nela é inserida uma funcao anomina, com o bloco de codigo e retorno. So sem nome.
const imprimirSoma = function(a, b) {
    console.log(a + b)
} 

imprimirSoma(2, 3)  //chamada da funcao inserida na constante imprimirSoma


//acrescentando uma FUNCAO ARROW em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(4,2))    //mostrando no console a chamada feita a funcao armazenada na constante soma

//funcao com retorno IMPLICITO
const subtracao = (a,b) => a - b     //com uma linha de codigo so, o return fica implicito
console.log(subtracao(20, 5))   //mostrando na tela a chaamda da funcao armazenada na constante subtracao

const imprimir2 = a =>  console.log(a)   //deixando a funcao ainda menor. Se tiver somente um parametro, podem ser eliminados os parenteses
imprimir2("NICEEEE!") 






