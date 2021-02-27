// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro inteiro.

const numero_par_impar = function(numero) {
    let classifica

    if(numero % 2 == 0) {
        classifica = 'par'
    } else {
        classifica = 'impar'
    }

    return classifica
}


//exibiçoes no console de diversas chamadas a função armazenada na constante numero_par_impar()
console.log(numero_par_impar(10))

console.log(numero_par_impar(101))

console.log(numero_par_impar(-110))

console.log(numero_par_impar(-999))

