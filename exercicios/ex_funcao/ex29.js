/*  Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao 
final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média 
para aprovação é igual ou superior a 8 */

//função armazenada numa constante
const ver_aprovacao = function(aluno, nota1, nota2, nota3) {
    let aprovacao 
    let media_aluno = ((nota1 + nota2 + nota3) / 3).toFixed(2)

    if(media_aluno >= 8) {
        aprovacao = 'aprovado'
    } else {
        aprovacao = 'reprovado'
    }

    return `O aluno(a) ${aluno} de media ${media_aluno} foi ${aprovacao}`
}


//testando a função criada
console.log(ver_aprovacao('ana', 10, 8, 9))
console.log(ver_aprovacao('breno', 5, 4, 2))
console.log(ver_aprovacao('jonas', 10, 10, 9))
console.log(ver_aprovacao('lana', 6, 8, 7))
