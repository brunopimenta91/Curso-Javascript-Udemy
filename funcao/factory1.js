//FUNÇÃO FACTORY - é uma função que retorna um objeto

//função factory simples   - 
function criarPessoa() {
    //retorno da função é um objeto com dois atributos, setados e preenchidos com valores (strings): nome e sobrenome
    return {
        nome: 'ana',
        sobrenome: 'sonza'
    }
}


console.log(criarPessoa())     //mostra na tela o retorno da função crarPessoa(), que é um objeto criado.


