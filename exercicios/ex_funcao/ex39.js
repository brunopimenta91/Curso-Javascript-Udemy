/*   Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A   */

//array de numeros correspondentes a notas de alunos
const notas_alunos = [2, 4, 6, 8, 9.5]

const lista_conceito = function(lista_notas) {

    //função interna usando função arrow
    const atribui_conceito = (nota) => {
        let conceito 

        if((nota >= 0) && (nota <= 4.9)){
            conceito = 'D'
        } else if(nota <= 6.9) {
            conceito = 'C'
        } else if(nota <= 8.9) {
            conceito = 'B'
        } else if(nota <= 10) {
            conceito = 'A'
        }

        return conceito
    }

    /*  retorno da função será um array com todos os elementos presentes no array de origem, usando o metodo map(),
    que passa por todos os elementos do array. */
    return lista_notas.map(atribui_conceito)
}


//testes da função criada
console.log(lista_conceito(notas_alunos))
