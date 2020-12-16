/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

 //uma função arrow armazenada em uma constante - a função irá classificar o tipo de triangulo, com os 3 lados passados como parametros.

const classifica_triangulo = (lado1, lado2, lado3) => {
    if(lado1 == lado2 && lado2 == lado3) {
        return 'equilátero'
    } else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
        return 'escaleno'
    } else {
        return 'isosceles'
    }
}

//chamada a função armazenada na constante classifica_triangulo
console.log(classifica_triangulo(9, 9, 2))   //trinagulo isosceles  - dois lados quaisquer iguais
console.log(classifica_triangulo(1, 2, 3))   //triangulo escaleno   - todos os 3 lados diferentes
console.log(classifica_triangulo(50, 50, 50))   //triangulo equilatero   - todos os 3 lados iguais
