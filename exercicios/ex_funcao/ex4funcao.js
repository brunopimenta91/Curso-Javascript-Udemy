/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.   */

//armazenei a função arrow na constante opera_divisao
const opera_divisao = (dividendo, divisor) => {
    console.log(`divisão de ${dividendo} por ${divisor}: ${parseInt(dividendo / divisor)}`)

    console.log(`resto da divisao: ${dividendo % divisor}`)
}

//chamadas diversas à função arrow presente na constante opera_divisao, tanto divisões com resto 0 quanto com resto 1
opera_divisao(3, 2)
opera_divisao(100, 2)
opera_divisao(51, 3)
opera_divisao(29, 4)
