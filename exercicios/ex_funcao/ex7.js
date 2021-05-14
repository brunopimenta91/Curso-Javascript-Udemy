/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */



//A LOGICA ESTÁ ERRADA. CONSERTAR


const checa_numero_intervalo = function (valor, inicio, final, incluso = false) {
    if (incluso === true) {
        console.log("intervalo inclusivo")
        if ((valor >= inicio) && (valor <= final)) {
            return true
        } else {
            return false
        }

    } else {
        console.log("intervalo exclusivo")
        if ((valor > inicio) && (valor < final)) {
            return true
        } else {
            return false
        }
    }
}

//testando os parametros da função console.log(checa_numero_intervalo(16, 100, 160)) // retornará false   
console.log(checa_numero_intervalo(20, 0, 10))

console.log(checa_numero_intervalo(3, 150, 3)) // retornará false
console.log(checa_numero_intervalo(3, 150, 3, true)) // retornará true  */

//MEUS TESTES
console.log(checa_numero_intervalo(1, 1, 10, true))       //retornará true  
console.log(checa_numero_intervalo(5, 10, 40, true))      //retornará true  
console.log(checa_numero_intervalo(100, 50, 200, true))   //retornará true  
console.log(checa_numero_intervalo(3, 150, 3))             //retornará false    
