/*  30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.  */

//função arrow sem parametro, armazenada em uma constante
const menor_e_maior = () => {
    //vetor declarado
    const vetor_numeros = [2000, 20, 4, -1, 99, 55, 50000, 0.5]

    //variaveis menor e maior declaradas, com caada uma delas sendo definido o menor e maior valores possiveis em javascript, com os metodos presentes na funcao Number
    let menor = 0; let maior = 0

    //estrutura de repetição FOR IN()
    for(let indice in vetor_numeros) {
        //verificando qual dos numeros no vetor é o menor em valor
        if(vetor_numeros[indice] < menor) {
            menor = vetor_numeros[indice]
        }

        //verificando qual dos numeros no vetor é o maior em valor
        if(vetor_numeros[indice] > maior) {
            maior = vetor_numeros[indice]
        }
    }

    //mostrando na tela o menor e o maior numero
    console.log(`menor numero: ${menor} - maior numero: ${maior}`)

}


//chamada à função menor_e_maior()
menor_e_maior()

