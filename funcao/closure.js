
//Closure é o escopo criado quando uma função é declarada.
//Este escopo permite a função acessar e manipular variaveis externas à função

//Contexto Léxico em ação!

const escopo = 'global'    //variavel no escopo global, global do arquivo atual do node

function fora() {
    const escopo = 'local'   //variavel no escopo local, escopo local de dentro da função fora()

    function dentro() {
        return escopo
    }

    return dentro     //função fora() irá retornar o retorno anterior da função interna dentro()
}


const minhaFuncao = fora()     //constante minhaFuncao recebe a funcao (e consequentemente seu retorno) fora()
console.log(minhaFuncao())    //mostra o valor retorna da função setada à constante minhaFuncao







