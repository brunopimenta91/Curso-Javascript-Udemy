/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. */


let lista_palavras = ['ana', '1234', 'ana', 'oi', 'fernando']

let pesca_palavras = function(palavra, lista) {

    return lista.filter((elemento_lista) => elemento_lista.includes(palavra))

}

console.log(pesca_palavras('ana', lista_palavras))


/*
function buscarPalavrasSemelhantes(inicio, palavras) {
return palavras.filter(palavra => palavra.includes(inicio))
}

*/
