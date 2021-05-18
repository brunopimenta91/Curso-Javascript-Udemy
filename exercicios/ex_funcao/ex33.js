// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.


let lista_valores = [1, 2, 3, 40, 333]

const funcao_barrichello = function(array_numeros) {

    let segundo_valor = function(valor_inicio, valor_seguinte) {
        let maior = 0
        //let segundo_maior

        if(valor_inicio > maior) {
            maior = valor_inicio
        }

        return maior
    }

    return array_numeros.reduce(segundo_valor)
}

console.log(funcao_barrichello(lista_valores))

