/* 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.  */

const intervalo_impares = function(inicio = 0, final = 100) {
    let auxiliar

    if(inicio > final) {
        auxiliar = inicio
        inicio = final
        final = auxiliar  
    }

    console.log(`inicio ${inicio} / ${final}`)

    for(inicio; inicio <= final; inicio++) {
        if(inicio % 2 == 1) {
            console.log(inicio)
        }
    }

}

intervalo_impares(20, 5)

intervalo_impares(14, 1)
