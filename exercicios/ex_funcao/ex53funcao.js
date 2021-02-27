//Faça um Programa que converta metros para centímetros.

//função que recebe uma medida em metros em a converte em centimetros

function converte_cm(medida) {
    let total_centimetros = medida * 100       //calculo dos cms

    return total_centimetros                   //retorna o valor da medida dada em cms
}


console.log(`O total de centimetros é ${converte_cm(1.83)} cms!`)