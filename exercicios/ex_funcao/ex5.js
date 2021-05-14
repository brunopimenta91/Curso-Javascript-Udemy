//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo 

const menor_igual_maior = function(primeiro_numero, segundo_numero) {
    if ((primeiro_numero >= segundo_numero) && (primeiro_numero === segundo_numero)) {
        return true
    } else {
        return false
    }
}

//está com erro - ver a resolução

console.log(menor_igual_maior(0, 0)) // retornará true

console.log(menor_igual_maior(0, "0")) // retornará false

console.log(menor_igual_maior(0, 0))   //retorna false