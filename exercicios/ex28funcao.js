/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */


const inteiros = [23, 3, 2, -10, 0, 999, 90, -127]
let total_par = 0; let total_impar = 0

for (let indice in inteiros) {
    if(inteiros[indice] % 2 == 0) {
        total_par++
    } else {
        total_impar++
    }
}

console.log(`No vetor tem ${total_impar} impares e ${total_par} pares.`)

