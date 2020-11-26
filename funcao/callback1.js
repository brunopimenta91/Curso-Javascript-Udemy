
//um array com nomes de marcas de carro
const fabricantes = ['mercedes', 'audi', 'bmw']

//função para imprimir o indice e o nome do elemento guardado 
function imprimir(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}


//forEach() executa a a função callback uma vez para cada elemento do array
fabricantes.forEach(imprimir)   //passando a função criada que será chamada (dai o callback) para cada elemento presente no array (por meio da função imprimir)

//passada uma função dentro do caompo de parametros da função ForEach() - função presente em TODOS OS ARRAY, em javascript
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
