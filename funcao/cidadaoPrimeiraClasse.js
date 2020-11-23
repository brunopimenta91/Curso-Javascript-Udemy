
//função em Javascript é First class Object (Citizens) ou Higher order function (função de alta ordem) - FUNÇÃO é tratada como um tipo de DADO

//criar função de forma literal
//è possivel passar funções COM ou SEM parametros.
function fun1() {

}

//Toda função retorna ao minimo o UNDEFINED, caso o return não seja define na estruturação da função. Caso o return esteja presente, ela irá retornar o tipo de dado especificado no return.

//armazenar uma função (anonima) em uma variavel (ou constante)
const fun2 = function () {

}

//armazenar uma função em um array  - podemos definir a função literalmente dentro da estrutura do array ou referenciar ela atraves de seu nome ou do nome da variavel (ou constante) na qual ela está armazenada
const array = [function(a, b) {return a + b}, fun1, fun2]

console.log(array[0](2, 4)) //acessando o elemento o do array, e em seguida passando os parametros para a função presente nesse elemento 0 do array. retornará no console a soma dos dois numeros passados como parametros.


//armazenar uma função em um atributo de um objeto
const obj = {}    //objeto vazio (sem nenhum atributo definido previamente) criado de forma literal
obj.saudacao = function () {return 'Olá, padawans!'}

console.log(obj.saudacao())   //mostrando na tela do console uma chamada a função presente como atributo do objeto obj

// passando uma função como parametro de uma função
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})   // fazendo uma chamada à função run, passando de forma lietral como parametro, uma função nela.


// Uma função pode retornar/conter uma função internamente!!!
function soma(a, b) {
    return function(c) {
       console.log(a + b + c) 
    }
}

//chamada à função soma(), passando dois parametros. Logo ao lado da chamada dela, se faz a chamada da função que a função soma() retorna, passando um terceiro parametro. Meio incomum, mas possivel!
soma(2, 3)(4)

//alternativa seria armazenar a chamada da função soma em uma variavel (ou constante), e dessa variavel fazer a passagem de parametro para o segunda função (originalmente retornada pela função soma() )
const somaDoisNumeros = soma(10, 90)
somaDoisNumeros(20)   //mostrará a soma dos dois parametros e do terceiro numero, no console.












