/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
 Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
Exemplos:
areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59  */

//criando a função com uso de FUNÇÃO ANONIMA e que foi armazenada em uma CONSTANTE
const calculo_triangulo = function(base, altura) {
    return ((base * altura) / 2).toFixed(2)    //tofixed() - função que define as casas decimais de um valor qualquer
}

//testando a função criada e mostrando na tela do console
console.log(calculo_triangulo(10.39, 2.9))
console.log(calculo_triangulo(100.23, 4.4))
console.log(calculo_triangulo(6.2, 8.4))
console.log(calculo_triangulo(300, 20.97))



//criando a função com uso de FUNÇÃO ARROW e que foi armazenada em uma VARIAVEL LET
let area_triangulo = (base, altura) => ((base * altura) / 2).toFixed(2)


//testando a função criada e mostrando na tela do console
console.log(area_triangulo(10.39, 2.9))
console.log(area_triangulo(100.23, 4.4))
console.log(area_triangulo(6.2, 8.4))
console.log(area_triangulo(300, 20.97))