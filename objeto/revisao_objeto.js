//OBJETO - é uma coleção dinamica de pares chaves/valores

//criando um objeto: usando new e a função Object
const produto = new Object    //usando new e a função Object (em javascript)

//criando atributos dinamicamente para o objeto criado acima. E iserindo valores nesses atributos
produto.nome = 'Cadeira'    //atributo usando a notação ponto '.'
produto['marca do produto'] = 'Panasonic'     //inserindo um atributo com espaço e com uma string - usa se um par de colchetes '[ ]'
produto.preco = 220

//mostrando no console o OBJETO produto (com seu atributos e valores deles) 
console.log(produto)

//deletando de forma DINAMICA atributos presentes no objeto criado
delete produto.preco
delete produto['marca do produto']

console.log(produto)    //mostrando o objeto atualizado, sem os atributos excluidos.

//criando um objeto: de forma LITERAL
const carro = {
    //atributos internos com seus valores
    modelo: 'Enzo ferrari',
    valor: 90000,

    //objetos podem possuir objetos internos
    proprietario: {
        nome: 'Mauro',
        idade: 58,
        
        //e objetos internos de objetos, podem ter seus proprios objetos internos
        endereco: {
            logradouro: 'rua ABC',
            numero: 1234
        }
    },

    //objetos podem possuir arrays internos com objetos diversos
    condutores: [{
        nome: 'junior',
        idade: 22
    }, {
        nome: 'ana',
        idade: 33
    }, {
        nome: 'Artur',
        idade: 87
    }],

    //objetos podem possuir funções internas
    calculoValorSeguro: function() {
        //corpo interno da função
    }

}


//COMO alterar ATRIBUTOS INTERNOS DO OBJETO
carro.proprietario.endereco.numero   
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante de ferro' //forma alternativa, usando strings com os nomes dos atributos/objetos internos do objeto.
console.log(carro)

//deletando DINAMICAMENTE atributos ou objetos internos ou array de objetos internos do objeto principal
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculoValorSeguro

//mostrando o objeto carro, agora sem os atributos ou objetos internos ou array de objetos internos EXCLUIDOS
console.log(carro)

//tentando acessar um array que não existe internamente no objeto
console.log(carro.condutores)    //retornará undefined, pois o arrya não foi declarado.

//tentando acessar uma informação/elemento interno do array que não existe internamente no objeto
console.log(carro.condutores.length)  //vai dar ERRO, pois não é possivel acessar uma informação/dado interno de um atributo/array/função que não existe no objeto
