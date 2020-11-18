//₢riada uma funcao com um parametro nota

function soBoaNoticia(nota) {
    //bloco condicional if - se a relaçao no bloco ir for verdadeira, irá por em funcionamento os codigos entre os parenteses.
    if(nota > 7) {
        console.log('aprovado com ' + nota)
    }
}

//Duas chamadas a funcao soBoaNoticia() - a primeira irá retorna uma frase e a segunda nada fará. 
soBoaNoticia(8.1)
soBoaNoticia(3.3)


//₢riada uma segunda funcao, que rá fazer uso de um bloco condicional if - retornara se o valor dado como parametro para a funcao for um valor que em javascript, se comporte como true. Ja se for false, nada retornará
function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('é se comporta como verdadeiro o valor ' + valor)
    }
}

//chamadas diversas a funcao seForVerdadeEuFalo, com valores true ou false sendo passados como parametros
seForVerdadeEuFalo()  //nenhum parametro passado - retorna nada
seForVerdadeEuFalo(null) //parametro null 
seForVerdadeEuFalo(undefined)  //orçando um parametro undefined 
seForVerdadeEuFalo(NaN)  //NaN como parametro. tbm será false
seForVerdadeEuFalo("")  //string sem nenhum espaço ocupado (nem que seja um espaço em branco) - nada retornará
seForVerdadeEuFalo(0)   //0 é tratado como false tbm

//os parametros que podem se comportar como verdadeiro
seForVerdadeEuFalo(-1)   //nuemros diferentes de zero
seForVerdadeEuFalo(' ')  //uma string de qualquer tamanho, inclsuive com um unico espaço em branco
seForVerdadeEuFalo('?')   //string com um caractere usado só
seForVerdadeEuFalo('teste') //tring de outro tamanho
seForVerdadeEuFalo([])   //array vazio (sem elementos adicionados)
seForVerdadeEuFalo([12, 3, 0.9])  //rray com elementos já presentes
seForVerdadeEuFalo({})   //um objeto vazio como parametro
seForVerdadeEuFalo({nome: 'ana', sobrenome: 'banana'})  //objeto com atributos e valores setados neles










