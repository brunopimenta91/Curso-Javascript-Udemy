/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

const equacao_2grau = function (ax2, bx, c) {
    let x1 = 0, x2 = 0
    let array_resultado = []

    let delta = Math.pow(bx, 2) - 4 * ax2 * c

    if(delta < 0) {
        console.log('Delta é negativo! Naõ tem resulta nos reais')
    } else if(delta == 0) {
        x1 = (- bx + Math.sqrt(delta)) / 2 * ax2

        x2 = x1

    } else {
        x1 = (- bx + Math.sqrt(delta)) / 2 * ax2

        x1 = (- bx - Math.sqrt(delta)) / 2 * ax2

    }

    array_resultado.push(x1)
    array_resultado.push(x2)

    return array_resultado
}


console.log(equacao_2grau(1, 12, -13))
