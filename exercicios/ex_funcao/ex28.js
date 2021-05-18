/*   A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o 
valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for 
parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o 
parcelamento for em 5 vezes, o acréscimo será de 20%. */

function valorfinal_produto(valor_dinheiro, numero_parcelas = 0) {
    let valor_final = valor_dinheiro

    if(numero_parcelas == 3) {
        valor_final = valor_dinheiro * 1.1 

    } else if(numero_parcelas == 5) {
        valor_final = valor_dinheiro * 1.2
    } 

    return `O produto de valor R$ ${valor_dinheiro} foi parcelado em ${numero_parcelas} vezes, sendo um total de R$ ${valor_final} a ser pago.`
}

console.log(valorfinal_produto(1000))
console.log(valorfinal_produto(2000, 3))
console.log(valorfinal_produto(10000, 5))

