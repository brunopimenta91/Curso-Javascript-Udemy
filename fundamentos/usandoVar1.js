//uma variavel dentro de diversos blocos
{
    {
        {
            {
                //uma variavel em javascript definida com var, é visivel em qual trecho do programa, seja dentro de bloco de codigo etc.
                var sera = 'Será????'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
}

teste()
// console.log(local)  - dá erro, pois a variavel local so esta visivel no escopo da funcao
