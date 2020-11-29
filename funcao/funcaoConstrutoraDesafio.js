//função construtora

function Pessoa(nome) {
    this.nome = nome           //setando o parametro recebido em uma variavel interna, de mesmo nome, com o uso do this.

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }

}


const pessoa1 = new Pessoa('Reinaldo')
pessoa1.falar()
console.log(pessoa1.nome)



/*   criada por mim - tem pequenos erros, tipo no getNome. Comaprar com a criada pelo professor

function criacao(nome = 'não declarado') {

    this.getNome = function() {
        return nome
    }

    this.mostraFrase = function() {
        return console.log(`Meu nome é ${this.nome}`)
    }
}


const pessoa = new criacao('bruno')

console.log(pessoa.getNome())
console.log(pessoa.mostraFrase())

*/