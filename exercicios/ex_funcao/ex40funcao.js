

/* 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.   */


const lista_notas = [2, 5, 7, 8, 10]

function mostra_nota(nota) {
    const lista_conceitos = []
    let conceito
    console.log(nota)

    if(nota >= 0 && nota <= 4.9) {
        conceito = 'D'
    } else if(nota <= 6.9) {
        conceito = 'C'
    } else if(nota <= 8.9) {
        conceito = 'B'
    } else {
        conceito = 'A'
    }

    lista_conceitos.push(conceito)

    for(let indice = 0; indice < lista_notas.length; lista_notas++) {
        console.log(`nota: ${lista_notas[indice]} - conceito: ${lista_conceitos[indice]}`)
    }
}

lista_notas.forEach(mostra_nota)





/*  EXEMPLO DO USO PRATICO DA FUNÇÃO foreach() que ajuda a percorrer os itens de uma array - no caso para que cada elemento dele seja passado como parametro pra função mostra_nota

//Valor retornado: Verde Amarelo Azul Branco
cores = ["Verde", "Amarelo", "Azul", "Branco"];

function imprimir(item) {
    console.log(item);
}

cores.forEach(imprimir); */
