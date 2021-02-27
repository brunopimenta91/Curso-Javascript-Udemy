/* Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius.          Fórmula: Celsius = (5 * (Farenheit -32) / 9)          */

//função arrow, armazenada em uma constante

const converta_para_celsius = (temperatura_farenheit) => {
    let temperatura_celsius = (5 * (temperatura_farenheit -32) / 9)

    return Number(temperatura_celsius).toFixed(2)
}


//chamadas diversas à função converta_para_celsius()

console.log(`A temperatura em celsius é ${converta_para_celsius(100)}`)

console.log(`A temperatura em celsius é ${converta_para_celsius(200)}`)

console.log(`A temperatura em celsius é ${converta_para_celsius(1000)}`)
