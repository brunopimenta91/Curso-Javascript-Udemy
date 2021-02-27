/* Faça um Programa que peça o valor da gasolina e do álcool de um posto e diga qual é o combustível mais vantajoso abastecer, sabendo que somente é vantagem abastecer álcool se o preço do mesmo é menor ou igual a 70% do valor da gasolina.    */

const compara_combustivel = function(preco_alcool, preco_gasolina) {
    let combustivel_escolhido;

    if(preco_alcool <= (preco_gasolina * 0.7)) {
        combustivel_escolhido = 'alcool'
    } else {
        combustivel_escolhido = 'gasolina'
    }

    console.log(`preço alcool: ${preco_alcool} / preço gasolina: ${preco_gasolina} /combustivel escolhido: ${combustivel_escolhido}`)
}


//chamadas diversas a função  compara_combustivel()

compara_combustivel(0.7, 1)

compara_combustivel(2, 1)
