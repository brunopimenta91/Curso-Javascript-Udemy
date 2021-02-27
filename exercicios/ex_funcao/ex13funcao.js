/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.    */

function ve_dia(dia) {
    let classificacao

    switch(dia) {
        case 1:
            classificacao = 'fim de semana'
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            classificacao = 'dia útil'
            break;
        case 7:
            classificacao = 'fim de semana'
            break;
        default:
            classificacao = 'dia inválido'
            break;
    }

    return classificacao
}

//chamadas diversas de
console.log(ve_dia(4))
console.log(ve_dia(1))
console.log(ve_dia(1000))
console.log(ve_dia(-1))
console.log(ve_dia(7))

