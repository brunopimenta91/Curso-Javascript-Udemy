/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.  */

function ver_intervalo10_20() {
    let dentrode10_20 = 0; let forade10_20 = 0;
    const array = [12, 18, 12, -2, 11, 19, 19, -15, 14, 20]

    for(let indice in array) {
        if(array[indice] >= 10 && array[indice] <= 20){
            dentrode10_20++
        } else {
            forade10_20++
        }
    }

    console.log(`Entre 10 e 20: ${dentrode10_20}  / Fora de 10 a 20: ${forade10_20}`)
}

//chamada a função sem parametro ver_intervalo10_20()
ver_intervalo10_20()
