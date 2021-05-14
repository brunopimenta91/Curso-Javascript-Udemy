/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ..." */

const verifica_valor = function(valor) {
    if(typeof valor === "boolean") {
        if(valor == true){
            valor = false
        } else {
            valor = true
        }
        return valor

    } else if(typeof valor === "number") {
        if(valor < 0) {
            valor = valor * -1
        }else {
            valor = valor * -1
        }
        return valor

    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }

}

//se for valor numero  (number)
console.log(verifica_valor(2))
console.log(verifica_valor(-199))

//se for valor booleano  (boolean)
console.log(verifica_valor(true))
console.log(verifica_valor(false))

//quando valor for de OUTROS TIPOS (sem ser number ou boolean)
console.log(verifica_valor('eberegg'))
console.log(verifica_valor(undefined))
console.log(verifica_valor(null))
console.log(verifica_valor([]))
console.log(verifica_valor( function() {return 'oi'} ))
console.log(verifica_valor(NaN))    //quando é NaN nao aparece a frase.
