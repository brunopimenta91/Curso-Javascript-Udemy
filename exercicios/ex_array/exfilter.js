/* 
const produtos = [
    {nome: 'bexiga', preco: 2, fragil: true},
    {nome: 'carro', preco: 20000, fragil: false},
    {nome: 'microondas', preco: 400, fragil: false}
]

const produto_caro = (produto) => produto.preco > 5000

const produto_fragil = (produto) => produto.fragil

console.log(produtos.filter(produto_caro).filter(produto_fragil))

*/

const listaCarros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12.000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14.000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20.000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12.000 },
    { id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25.000 },
    { id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13.000 },
    { id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15.000 },
    { id: 9, modelo: 'Logan', marca: 'Renault', preco: 15.000 }
  ]

  const carroFiltrado = listaCarros.filter(carro => carro.marca === 'Fiat')

  console.log(carroFiltrado.length)
  console.log(carroFiltrado)

  //outra filtragem no array listaCarros

  const carroFiltrado_2 = listaCarros.filter(carro =>
    carro.marca === 'Volkswagen' &&
    carro.modelo === 'Saveiro'
  )

  console.log(carroFiltrado_2) // [ { id: 4, modelo: 'Saveiro', marca: 'Volkswagen' } ]


  //outro exemplo da aplicação do metodo filter()

  const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

  //Selecionar apenas os cachorros
  let dogs = data.filter((animal) => {
    return animal.type === 'dog';
  })

  console.log(dogs)


  //devemos retornar a idade real de cada cachorro.
dogs.map((animal) => {
    return animal.age *= 7
})

console.log(dogs)


//exemplo filter no site da trybe

var produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"} 
]
var produtosEletrodomestico = produtos.filter(produto => produto.categoria == "Eletrodoméstico");
produtosEletrodomestico.forEach(produto => console.log(produto))





