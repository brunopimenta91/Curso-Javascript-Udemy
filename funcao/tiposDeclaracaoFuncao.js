//tipos diferentes de declaração de função

/* diferença entre function declaration , function expression e named function expression:
1 - a função sendo uma function declaration, permte que seja acessada antes mesmo da sua declaração na sequencia do codigo.
2- Isso ocorre pois em Javascript, antes de qualquer coisa, as funções presentes no codigo sao lidas, podendo ser acessadas antes mesmo de sua declaração ser posterior a uma chamada a ela.
3- Tal fato não acontece nem na  function expression e nem na named function expression, pois ambas estao armazenadas em variaveis/₢osntantes, que só sao lidas (e tem seu acesso permitido) após serem declaradas formalmente na sequencia do codigo.
*/

console.log(soma(1, 99))



// tipo 1 - function declaration

function soma(x, y) {
    return x + y
}


// tipo 2 - function expression  - se define uma função anonima e se armazena ela numa variavel ou constante com nome válido
const subtracao = function (a, b) {
    return a - b
}


// tipo 3 - named function expression   -  tanto a variavel/constante como a função na qual está armazenada, AMBAS POSSUEM NOMES. Isso em JAvascript é possivel, apesar de não ser tao comum. Util para debugar o codigo, já que tanto a varivel como a função são nomeadas
const multiplica = function produto(numero1, numero2) {
    return numero1 * numero2
}



