//estruturing em ARRAY

//CRIOU SE UMA CONSTANTE A, numa destruturação que recebe o PRIMEIRO valor presente no array do lado direito.
const [a] = [10]   
console.log(a)    //mostrando na tela o valor destruturado do array do lado direito

//a desestruturação de ARRAY pode ser feita com varios elementos ao mesmo tempo. Inclusive podendo elementos serem ignorados ou setados valores padrão aos mesmos (caso não existam no array a ser desestruturado)
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//desestruturacao aninhada de array (neles é viavel de ser feita)
const [ , [ , nota]] = [[, 8, 8], [10, 7, 9, 88]]    //não recomendavel usar - DIFICL DE SER LIDO
console.log(nota) 




