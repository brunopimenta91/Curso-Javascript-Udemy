
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2   // O perador logico || é o 'ou'. Se um dos valores forem verdadeiros, a setença é verdadeira
    const comprarTv50 = trabalho1 && trabalho2   //operador logico && é o 'e'. Se um dos valores forem falsos, a setença é falsa. Só será verdadeira se ambos forem verdadeiro.

    // const comprarTv32 = !!(trabalho1 ^ trabalho2)  //operador 'ou' exclusivo bitwise xor - ou um é verdadeiro ou outro.

    //para simular um 'ou' exclusivo - fazer com o operador diferença  !=
    const comprarTv32 = trabalho1 != trabalho2
    //todos os operadores logicos acima são OPERADORES LOGICOS BINÁRIOS!!!

    //UNICO operador unário lógico
    const manterSaudavel = !comprarSorvete 
    
    //alternativa para retornar mais de um valor em javascript - retornar um objeto com todos as constantes criadas e seus valores setados.
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

    //obs: o objeto foi criado de forma reduzida, com os atributos do objeto serem seus proprios valores

}



    //₢hamadas a funcao
    console.log(compras(true, true))
    console.log(compras(true, false))
    console.log(compras(false, false))

