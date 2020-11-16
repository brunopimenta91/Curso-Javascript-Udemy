//funcao arrow em uma constante

const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado'
//operador ternario - se nota maior ou igual a 7 for true, aprovado. Se nao, false

/*operador ternário é composto por 3 partes: Primeira, uma expressao, que retornará verdadeiro ou false.Dpois vem uma interrogacao (?) A segunda parte q retornará caso seja verdadeira a expressao. Depois vem o dois pontos ( : ). E a terceira a parte q retornará caso seja falsa a expressao.  */

console.log(resultado(7.1))
console.log(resultado(6.6))
