//Faça um Programa que converta  centímetros  para polegadas. (Dica: 1 centímetro = 0,393700787 polegadas)

//funcao arrow armazenada em uma constante

const converte_em_polegada = (valor) => {
    let total_polegada = valor * 0.393700787                             //calculo do total convertido de cms para polegadas

    return Number.parseInt(total_polegada)                              //retorno do valor total dadp como parametro da função em polegada
}

let medida_cm = 100


console.log(`A medida convertida de ${medida_cm} é um total de ${converte_em_polegada(medida_cm)}`)

