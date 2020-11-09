let isAtivo = false //definção literal de um tipo booleano falso
console.log(isAtivo)

isAtivo = true  //tipo booleano apra verdadeiro (true)
console.log(isAtivo)

isAtivo = 1   //declarando um valor numerico na variavel isAtivo - 1 pode ser considerado como verdadeiro.
console.log(!!isAtivo)  //usar 2 '!!' inverte a inversao do valor presente na variavel. Se for verdadeiro, usar 2 !! será verdaderio. Se usar so um "!" é falso. O seu uso "força" ao conteudo da avriavel se mostrar verdadeiro ou falso.

console.log('tipos de valores verdadeiros em javascript')
console.log(!!3)   //todos os numeros inteiros, positivos ou negativos (com ea exceçaõ do numero zero) se comportam como verdadeiro
console.log(!!-12)
console.log(!!" ")  //string com ao menos um espaço em branco
console.log(!!'shhshhd sususus')   //uma string com qualquer coisa escrita
console.log(!![])  //array vazio
console.log(!!{})   //obejto vazio ou não
console.log(!!Infinity)   //tipo Infinito
console.log(!!(isAtivo = true))   /*uma relaçaõ, na qual se considerará o lado direito da atribuição, 
sendo true se for um dos tipos que se comportam como true.   */


console.log('os tipos falsos:')
console.log(!!0)   //o numero zero
console.log(!!"")     //string vazia
console.log(!!null)     //o tipo null
console.log(!!undefined)   //tipo undefined
console.log(!!(isAtivo = false))  //atribuição que o lado direito seja um valor falso


console.log(!!('' || null || ' epa'))   //reconhece o valor verdadeiro 'epa' que se comporta como true

let nome = ''  //string vazia ou com nome digitado  - let nome = 'bruno'
console.log(nome || 'sem nome')

//



