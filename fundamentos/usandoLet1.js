var numero1 =  1
{
    //variaveis do tipo LET possuem 3 escopos: global, de funcao e de bloco. Por isso é recomendado usar let, ao inves de var
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero1)
