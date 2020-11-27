//definição de uma função construtora

function Carro(velocidadeMaxima = 200, acelerada = 5) {
    //atributo privado da função
    let velocidadeAtual = 0

    //metodo publico (acessado atraves do this )  - que atualiza a velocidade atual, com o parametro acelerada
    this.acelerar = function () {
        if(velocidadeAtual + acelerada <= velocidadeMaxima) {
            velocidadeAtual += acelerada
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico  - para dar acesso ao valor presente no atributo privado e interno da função, de nome velocidadeAtual.
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

}


//  instanciando uma ocorreencia da função cosntrutora (que na pratica é que nem instanciar um obejto em Java)
const uno = new Carro             //para se instanciar um OBJETO da função cosntrutora em Javascript, usa se a palavra reservada "new"  - passar parametros ou não é FACULTATIVO

//chamada ao metodo/função publico(a) de Carro, a função acelerar() - que aumenta a velocidade do carro em certo valor
uno.acelerar()

console.log(uno.getVelocidadeAtual())     //mostrando na tela do console, o valor presente na variavel interna da função construtora de Carro, a variavel let de nome velocidadeAtual



//Instanciando um outro OBJETO da função cosntrutora em Javascript, usa se a palavra reservada "new"
const ferrari = new Carro(350, 20)    //passados dois atributos, a velocidadeMaxima sera 350 e  acelerada = 20 

ferrari.acelerar()   //₢hamada a função acelerar - aumenta a velocidade atual

//mais duas chamadas a função - mais dois aumentos da velocidade atual
ferrari.acelerar()   
ferrari.acelerar()

//mostrando na tela do console a velocidade atual
console.log(ferrari.getVelocidadeAtual())

//mostrando o tipo de que pertencem Carro() e sua instancia ferrari
console.log(typeof Carro)    //Carro é uma função (construtora)
console.log(typeof ferrari)   //já ferrari é um (instancia de ) objeto de sua FUNÇÃO CONSTRUTORA Carro 


