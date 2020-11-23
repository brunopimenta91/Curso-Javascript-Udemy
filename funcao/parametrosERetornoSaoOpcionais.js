
function area(largura, altura) {
    const area = largura * altura

    //exemplo não mto bom de forma prática. Criado so para ajudar na didatica de aprendizado.
    if(area > 20) {
        console.log(`Area acima do permitido: ${area} m².`)
    } else {
        return area
    }
}


console.log(area(2, 4))   //chamada da função funcionará normalmente, retornará o resultado do produto dos parametros

console.log(area(2))   //chamada da função NÃO funcionará, POIS SÓ TEM 1 PARAMETRO passado, retornará um Not a Number (NaN)

console.log(area())   //chamada da função NÃO funcionará, POIS NÃO PARAMETRO NENHUM passado, retornará um Not a Number (NaN)

console.log(area(2, 7, 14, 28, 56))  //chamada da função funcionará normalmente, retornará o resultado do produto dos parametros, mas com o numero de parametros passsados ser maior que o de parametros permitidos na constituição da função

console.log(area(5, 5))  //chamada da função funcionará normalmente, retornará a mensagem de erro, pois excede o valor limite, na estrutura de constrole IF/ELSE
