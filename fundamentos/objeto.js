const prod1 = {}  //declaração literal de um objeto vazio

prod1.nome = 'celular ultra mega'  //₢riação de um atributo dinamicamente, no objeto vazio criado

prod1.preco = 5000.50  //egundo atributo criado dinamicamente

prod1['desconto legal'] = 0.40   //posivel de ser criado, MAS evite. Não é boa prática.

console.log(prod1)   //mostrando no console, o objeto criado e seus atributos

//OBS: OS OBJETOS SÃO CONJUNTOS DE PARES CHAVE - VALOR

//segunda forma de declarar um objeto e seus atributos, dinamicamente. Já com o conjuto de bloco e chaves e valores

const prod2 = {
    nome: 'prancha de surfe',
    preco: 3000
}

console.log(prod2)













