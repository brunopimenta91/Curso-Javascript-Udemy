/*  Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.  */

let mostra_intervalo = function(numero_inicio = 0, numero_final = 100) {

    if(numero_inicio > numero_final) {
        let auxiliar = numero_final
        numero_final = numero_inicio
        numero_inicio = auxiliar
    }

    for(let indice = numero_inicio; indice <= numero_final; indice++) {
        if(indice % 2 != 0) {
            console.log(indice)
        }
    }
}


mostra_intervalo(10, 30)
mostra_intervalo(20, 10)
mostra_intervalo(-10, 0)
mostra_intervalo(-20, -11)
