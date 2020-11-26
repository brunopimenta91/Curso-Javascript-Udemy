//array criado para receber notas (valores numericos)
const notas = [8.7, 8, 9.0, 2.45, 5.6, 10]


//prnotasimeira abordagem - SEM CALLBACK

let notasRuins = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasRuins.push(notas[i])
    }
}

console.log(notasRuins)
