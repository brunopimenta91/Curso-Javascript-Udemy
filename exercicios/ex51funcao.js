/* Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
para aprovação é igual ou superior a 8. */


function avaliacao(nome, notaA, notaB, notaC) {
    let media = (notaA + notaB + notaC) / 3
    let classificacao
    if(media >= 8) {
        classificacao = 'aprovado'
    } else {
        classificacao = 'reprovado'
    }

    console.log(`nome: ${nome} - media: ${media.toFixed(2)} - classsificacao: ${classificacao}`)
}

avaliacao('bruno augusto', 10, 8, 2)

avaliacao('guilherme hoffman', 2, 6, 4)

avaliacao('william bonner', 10, 9, 10)