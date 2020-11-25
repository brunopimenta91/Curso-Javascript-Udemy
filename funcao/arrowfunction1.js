//fução declarada de forma literal - modo tradicional

let dobro = function (a) {
    return 2 * a
}


/* função descrita como uma função ARROW (forma mais enxuta)
TODA FUNÇÃO ARROW É UMA FUNÇÃO ANONIMA. Entao toda função arrow tem a necessidade de ser setada para uma variavel ou constante*/
dobro = (a) => {
    return 2 * a
}


//função ARROW (ainda mais enxuta) - quando uma função arrow possui 0 ou 1 só parametro, podesse eliminar o bloco de chaves, fazendo ela toda ter somente 1 linha.
dobro = a => 2 * a         //nessa função arrow de uma linha so, o return está IMPLICITO
console.log(dobro(Math.PI))


//exemplo 2 - função descrita de forma literal - forma tradicional
let ola = function () {
    return 'olá'
}

//função descrita como uma função arrow
ola = () => 'olá'      //melhor jeito e mais comum da função arrow de uma string qualquer

ola = _ => 'olá 2'  //possui um parametro
console.log(ola())


