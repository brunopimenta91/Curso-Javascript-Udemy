//usando a notação literal
const obj1 = {}
console.log(obj1)

//usando a função Object em Javascript
console.log(typeof Object, typeof new Object)
const obj2 = new Object     //armazenando um objeto criado com a função Object em Javascript
console.log(obj2)

//usando funções construtoras
function Produto(nome, preco, desconto) {
    //this - permite que o atributo possa ser acessivel e modificado FORA do objeto
    this.nome = nome    //parametro do objeto foi passado para o atributo interno (e que está visivel)

    //com this tambem é possivel tornar acessiveis funçoes internas
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

//criando objetos e passando valores para eles com new
const item1 = new Produto('caneta', 8, 0.15)
const item2 = new Produto('Notebook', 3000, 0.25)

//mostrando o valor dos produtos com desconto, acessando a função interno dos objetos atraves da notacao '.' e acessando a funcao interna descrita na função construtora
console.log(item1.getPrecoComDesconto(), item2.getPrecoComDesconto())


//função factory
function criandoFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

//criando objetos e passando parametros para ele atraves da função factory criandoFuncionario() criada
const colaborador1 = criandoFuncionario('joana', 10000, 10)
const colaborador2 = criandoFuncionario('martin', 2000, 2)

//mostrando o valor atualizado do salario dos funcionarios, atraves da função acessivel getSalario()
console.log(colaborador1.getSalario(), colaborador2.getSalario())


// criando objetos atraves do Object.create
const filha = Object.create(null)
filha.nome = 'marcela'
console.log(filha)

//uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)




























