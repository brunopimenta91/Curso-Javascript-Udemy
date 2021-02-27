/* 19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.   */

function valor_lanche(lanche, quantidade) {
    let preco_lanche
    let total_lanche 
    let nome_lanche

    switch(lanche) {
        case 100:
            nome_lanche = 'Cachorro Quente'
            preco_lanche = 3.00
            break;
        case 200:
            nome_lanche = 'Hambúrguer Simples'
            preco_lanche = 4.00
            break;
        case 300:
            nome_lanche = 'Cheeseburguer'
            preco_lanche = 5.50
            break;
        case 400:
            nome_lanche = 'Bauru'
            preco_lanche = 7.50
            break;
        case 500:
            nome_lanche = 'Refrigerante'
            preco_lanche = 3.50
            break;
        case 600:
            nome_lanche = 'Suco'
            preco_lanche = 2.80
            break;
        default:
            console.log('erro! Lanche inexistente!')
            break;
    }

    total_lanche = preco_lanche * quantidade

    return console.log(`${quantidade} unidades de ${nome_lanche} à R$ ${preco_lanche} cada um é um total de R$ ${total_lanche}!`)
}

valor_lanche(100, 10)

valor_lanche(1000, 10)


