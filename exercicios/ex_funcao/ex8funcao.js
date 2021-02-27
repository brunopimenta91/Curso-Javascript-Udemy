/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
 */


function verifica_pontuacao () {
    let array_pontos = [10, 20, 20, 8, 25, 3, 0, 30, 1]
    let recordes_ocorridos = 0
    let menor_pontuacao = 0
    let maior_pontuacao = array_pontos[0]
    let array_verificacao = []

    for (let i in array_pontos) {

        if(array_pontos[i] > maior_pontuacao) {
            recordes_ocorridos++
        }

        if(array_pontos[i] < menor_pontuacao) {
            menor_pontuacao = array_pontos[i]
        }
    } 

    array_verificacao.push(recordes_ocorridos, menor_pontuacao)

    return array_verificacao

}

console.log(verifica_pontuacao())
