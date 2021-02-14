/*  Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Farenheit.               Fórmula : Farenheit  =  Celsius  × 1,8 + 32                    */

const converte_em_farenheit = (temperatura_celsius) => {

    let temperatura_farenheit = temperatura_celsius * 1.8 + 32     //calculo da temperatura de celsius para farenheit
 
    return Number(temperatura_farenheit).toFixed(2)              //retorna o valor arredondado em duas casas decimais
}


console.log(`A temperatura em farenheit é ${converte_em_farenheit(100)}`)