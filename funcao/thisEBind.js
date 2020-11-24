//objeto criado com um atributo e uma função interna falar(), que seta o atributo saudacao, com o uso do this.
const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}


pessoa.falar()    //chamada da função interna do objeto pessoa
const falar = pessoa.falar   //Sem os () , a chamada da função interna do objeto pessoa não é executada
falar()    //₢onflito entre paradigmas: funcional e Orientado a objeto


//usando a função bind(), setando a função interna do objeto pessoa na constante falarDePessoa
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()   //usando a constante como uma chamada de função




