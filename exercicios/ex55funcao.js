//Faça um Programa que peça o raio de um círculo, calcule e mostre sua área. Fórmula: Area = pi * raio² 

//função anônima armazenada numa constante

const calcula_area_circulo =  function(raio) {
    let area_circulo = Number(Math.PI * Math.pow(raio, 2)).toFixed(2)     //calculo da area do circulo, a partir da medida dada

    return area_circulo
}


//chamadas diversas ao funcao calcula_area_circulo()

console.log(`A area do circulo é ${calcula_area_circulo(20)}`)

console.log(`A area do circulo é ${calcula_area_circulo(5)}`)

console.log(`A area do circulo é ${calcula_area_circulo(40)}`)