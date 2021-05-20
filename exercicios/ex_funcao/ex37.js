//) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.


function divisao_e_resto(dividendo, divisor) {
    let resultado; let resto

    resultado = dividendo / divisor
    resto = dividendo % divisor

    return `${dividendo} dividido por ${divisor} é igual a ${resultado.toFixed(2)}  /  resto = ${resto}`
}


//testando a função criada
console.log(divisao_e_resto(10, 2))
console.log(divisao_e_resto(230, 3))
console.log(divisao_e_resto(60, 6))
console.log(divisao_e_resto(90, 6))
