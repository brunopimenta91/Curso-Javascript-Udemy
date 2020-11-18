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






