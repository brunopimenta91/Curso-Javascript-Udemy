//Exemplos de usos das propriedades e métodos presentes no objeto Math.
//PROPRIEDADES
console.log(Math.E)            //Constante de Euler e a base dos logaritmos naturais (próximo de 2,118)
console.log(Math.LN2)          //Logaritmo natural de 2.
console.log(Math.LN10)         //Logaritmo natural de 10.
console.log(Math.LOG2E)        //Logaritmo na base 2 de E.
console.log(Math.LOG10E)       //Logaritmo na base 10 de E.
console.log(Math.PI)           //Equivalente numérico de PI, arredondado para 3,14.
console.log(Math.SQRT1_2)      //Raiz quadrada de um meio (1/2).
console.log(Math.SQRT2)        //Raiz quadrada de 2.

//MÉTODOS
let numero_absoluto = -400.67;
console.log(Math.abs(numero_absoluto))  // 400.67

let numero_inteirocima = 4.45;
console.log(Math.ceil(numero_inteirocima))  // 5

let numero_inteirobaixo = 4.45;
console.log(Math.floor(numero_inteirobaixo))  // 4

console.log(Math.exp(4)) // equivalente a e4

let numero_arrendondabaixo = 5.40; let numero_arrendondacima = 5.78   //primeiro numero vai para 5 e o segundo para 6
console.log(Math.round(numero_arrendondabaixo), Math.round(numero_arrendondacima))  

let número = 100; let número2 = 400; let número3 = 999;   
console.log(Math.min( número, número2, número3))      //retornará o menor dos numeros passados
console.log(Math.max( número, número2, número3))      //retornará o MAIOR dos numeros passados

console.log(Math.random())     //retorna um valor entre 0 e 1