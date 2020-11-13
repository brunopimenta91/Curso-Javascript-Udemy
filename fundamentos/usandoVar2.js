//var em javascript nao tem escopo de bloco, EXCETO EM FUNCAO

var numero = 1

{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)