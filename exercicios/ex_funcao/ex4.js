//Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

const mes_extenso = function(numero_mes) {
    switch(numero_mes) {
        case 1:
            return 'janeiro'
        break;
        case 2: 
            return'fevereiro'
        break;
        case 3: 
            return 'março'
        break;
        case 4: 
            return 'abril'
        break;
        case 5: 
            return 'maio'
        break;
        case 6: 
            return 'junho'
        break;
        case 7: 
            return 'julho'
        break;
        case 8: 
            return 'agosto'
        break;
        case 9: 
            return 'setembro'
        break;
        case 10: 
            return 'outubro'
        break;
        case 11: 
            return 'novembro'
        break;
        case 12: 
            return 'dezembro'
        break;
        default: 
            return 'digito inválido - mês não existente'
    }
}

console.log(mes_extenso(2))

console.log(mes_extenso(12))

console.log(mes_extenso(34))

