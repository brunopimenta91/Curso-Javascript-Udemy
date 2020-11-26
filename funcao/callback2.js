//array criado para receber notas (valores numericos)
const notas = [8.7, 8, 9.0, 2.45, 5.6, 10]


//primeira abordagem - SEM CALLBACK

let notasRuins = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasRuins.push(notas[i])
    }
}

console.log(notasRuins)



/*segunda abordagem - COM CALLBACK - uma função anonima foi passada como parametro ds função interna do array criado, a filter()   */

const notasRuins2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasRuins2)


//callback com função arrow
const notasRuins3 = notas.filter(nota => nota < 7)
console.log(notasRuins3)

//alternativa à arrow com uma constante auxiliar

const notasMenorQue7 = nota => nota < 7
const notasRuins4 = notas.filter(notasMenorQue7)
console.log(notasRuins4)


