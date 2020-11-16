
let numero1 = 1
let numero2 = 2

//operador unario posfix (pos fixada) - acrescenta em uma unidada à variavel numero1
numero1++
console.log(numero1)

//operador unario prefix (pre fixada) - decrementa em uma unidade à variavel numero1
--numero1    //tem precedencia maior em relacao ao operador posfixado
console.log(numero2)

//na hora da comparaçao, ambas as variaveis tem valor 2
console.log(++numero1 === numero2--)

