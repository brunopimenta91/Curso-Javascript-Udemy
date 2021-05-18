/*  Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas. */


let alunos_notas = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}


const funcao_notas = function(array_passado) {

    let so_notas = array_notas => Object.values(array_notas)

    let soma_nota = (soma, nota_seguinte) => soma + nota_seguinte

}

/* 
Create a nested array
const nestedArray = [1, 2, [3, 4], 5]
 
Em seguida, desestruture aquela matriz e registre as novas variáveis:

// Destructure nested items
const [one, two, [three, four], five] = nestedArray

console.log(one, two, three, four, five)
*/


console.log(funcao_notas(alunos_notas))