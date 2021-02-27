//Faça um Programa que peça as 4 notas bimestrais e mostre a média.

//função com valores padrão - se algum dos parametros não for passado, o valor será o que foi definido com padrao

function media_4_bimestres(nota_b1 = 0, nota_b2 = 0, nota_b3 = 0, nota_b4 = 0) {

    let media = (nota_b1 + nota_b2 + nota_b3 + nota_b4) / 4                    //₢alculo da media

    return media                                                               //faz o retorno do valor da media
}


//os valores das 4 notas são definidos em inseridos em variaveis
let primeira_nota = 4; let segunda_nota = 10; let terceira_nota = 6; let quarta_nota = 8


//exibe na tela do console as notas e a chamada à função media_4_bimestres()

console.log(`Notas: ${primeira_nota} / ${segunda_nota} / ${terceira_nota} / ${quarta_nota}`)
console.log(`${media_4_bimestres(primeira_nota, segunda_nota, terceira_nota, quarta_nota)}`)

//se alguma das notas não for passada como parametro. Teste com só 2 e 3 parametros.
console.log(`${media_4_bimestres(primeira_nota)}`)
console.log(`${media_4_bimestres(primeira_nota, segunda_nota)}`)
console.log(`${media_4_bimestres(primeira_nota, segunda_nota, terceira_nota)}`)