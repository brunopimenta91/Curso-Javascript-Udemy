//destruturing - novo recurso do ecmascript 2015

const pessoa = {
    nome: 'ana',
    idade: 15,
    endereco: {
        logradouro: 'rua dos abacates',
        numero: 1000,
    }
}

//O operador de destruturing (desestruturação) é '{}', que permite o acesso a atributos internos de um objeto
const {nome, idade} = pessoa       //retire do objeto pessoa, os atributos nome e idade
console.log(nome, idade)     //mostrando na tela do console os valores caputrados dos atributos nome e idade

//feita uma destruturação de atributos do objeto, mas atribuindo nome diferentes aos atributos extraidos
const {nome: n, idade: i} = pessoa  
console.log(n, i)      //mostrando na tela do console os valores destruturados e presentes em n e em i


//tentando fazer destruturing em atributos que NÃO foram declarsdos no objeto. O atributo sobrenome retornará 'undefined' e o bemhumorada retornará 'true' pois foi definido um valor padrão, na estrutura do destruturing
const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)     //mostrando na tela do console os valores dos dois atributos.


//se quisermos acessar os atributos de um objeto que está DENTRO DO OBJETO pessoa (o objeto endereco)
const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)        //mostrando na tela do console os atributos do atributo/objeto interno endereco do objeto pessoa

//tentando acessar um atributo interno de um atributo interno que NÃO FORAM setados
//  const { conta: {ag, num } } = pessoa  //dará erro, pois nem o atributo pai, e nem os atributos filhos estão definidos. E os filhos não sendo nem definidos ou não, nao é possivel fazer destruturing neles. No atributo conta, seria possivel
// console.log(ag, num)


