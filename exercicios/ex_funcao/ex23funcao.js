/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

//media ponderada: media ponderada = (peso1 * nota1 + peso2 * nota2) / peso1 + peso2


    let codigo = parseInt(prompt('codigo aluno:'))
    let nota1 = parseInt(prompt('nota 1 aluno:'))
    let nota2 = parseInt(prompt('nota 2 aluno:'))
    let nota3 = parseInt(prompt('nota 3 aluno:'))

    function media_ponderada(codigo, nota1, nota2, nota3) {
        let peso_maior = 4; let peso_igual = 3; let media_ponderada

        if (nota1 > nota2 && nota1 > nota3) {
            media_ponderada = (peso_maior * nota1 + peso_igual * nota2 + peso_igual * nota3) / peso_maior + peso_igual + peso_igual
        } else if (nota2 > nota1 && nota2 > nota3) {
            media_ponderada = (peso_igual * nota1 + peso_maior * nota2 + peso_igual * nota3) / peso_igual + peso_maior + peso_igual
        } else if (nota3 > nota1 && nota3 > nota2) {
            media_ponderada = (peso_igual * nota1 + peso_igual * nota2 + peso_maior * nota3) / peso_igual + peso_igual + peso_maior
        }
    }
}
