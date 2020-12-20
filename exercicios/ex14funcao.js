/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

const pega_fruta = function (fruta) {
    let frase 
    
    switch(fruta) {
        case 'maça':
            frase = 'Não vendemos esta fruta aqui'
            break;
        case 'kiwi':
            frase = 'Estamos com escassez de kiwis'
            break;
        case 'melancia':
            let preco_melancia = 3.00
            frase = `Aqui está, são ${preco_melancia.toFixed(2)} reais o quilo`
            break;
        default:
            frase = 'ERRO!!! mensagem de erro! FRUTA INVÁLIDA'
            break;
    }

    return frase
}

console.log(pega_fruta('melancia'))
