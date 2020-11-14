//par nome/valor

// contexto léxico: é o local onde determinada varivael/constante foi localizada

const saudacao = 'opa'   //contexto léxico 1 

function exec() {
    const saudacao = 'FalllaaaaHH!'   //contexto léxico 2
    return saudacao
}

//Objetos são conjuntos aninhados de chave/valor, podendo ter obejtos dentro de um objeto externo.
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua dos bobos',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())   //a frase FAlllahhh SERÁ EXIBIDA, pois o contexto lexico interno da função prevalece frente ao global.
console.log(cliente)   //exibindo os atributos do objeto cliente. Atributos que são pares NOME(OU CHAVE) - VALOR

