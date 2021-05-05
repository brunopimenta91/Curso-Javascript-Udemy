//Em javascript existe um objeto com diversas propriedades e métodos internos que ajudam a facilitar operações matemáticas feitas em nossos códigos/programas. Esse objeto é o Math.

/*No exemplo abaixo faremos o calculo da area de um circulo, usando propriedades e metodos presentes no objeto Math:
Math.PI, que retorna o valor da constante matemática PI e o método Math.pow(base, expoente), que possibilita
cálculos de exponenciação de forma fácil no programa*/
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)  //typeof mostra que Math em Javascript é um tipo de OBJETO !!!!