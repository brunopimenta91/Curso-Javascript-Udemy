/*  06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.  */

const juros = function(capital_inicial, taxa, periodo) {

    // formula juros simples ->     J = C * i * t    ai tem q calcular o montante que é M = C + J
    let juros_simples = capital_inicial * taxa * periodo
    let montante_final_simples = capital_inicial + juros_simples
    
    // formula juros compostos ->   M = C (1+i)t
    let montante_final_compostos = capital_inicial * Math.pow((1 + taxa), periodo)

    return `montante nos juros simples: ${montante_final_simples}  - montante nos juros compostos: ${montante_final_compostos.toFixed(2)}`
}

console.log(juros(10000, 0.125, 2))
