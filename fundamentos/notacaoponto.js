/*COM A NOTAÇÃO PONTO, podemos acessar funções de objetos em Javascript  Como na*/

console.log(Math.ceil(9.2))  /* atraves da funcao matematica ceil() do objeto Math da API do Javascript, arredondamos o numero 9 para cima, o tornando 10  */

//₢iração de obejto vazia - sem atributo nenhum definido
const obj1 = {}
obj1.nome = 'Bola'   //com a notação ponto, podemos criar atributos à um objeto DINAMICAMENTE, também lhes atribuindo conteudo
console.log(obj1.nome)  /*com a notação ponto tambem, podemos exibir no console o valor definido no atributo nome criado para o objeto obj1  */

function Obj(nome) {
    this.nome = nome  //com a notacao ponto, tambem é possivel tornar uma PUBLICA/visivel, uma variavel interna de uma funcao, com o uso do THIS. 

    //com a notacao ponto, podemos tornar publica uma funcao interna da funcao
    this.exec = function() {
        console.log("Executando... ")
    }
}

const obj2 = new Obj('Cama')   //instanciando uma instancia do objeto Obj e lhe passando como parametro 'cama' e lhe atribuindo a uma constante
const obj3 = new Obj('sofá')    //isntanciando OUTRO instancia do objeto Obj
console.log(obj2.nome)   //Com a notacao ponto, conseguimos acessar o conteudo do atributo que foi tornado visivel com o uso do THIS
console.log(obj3.nome)















