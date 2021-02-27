/* Crie uma variável chamada casa que execute as seguintes operações:
Atribua um objeto a variável com as propriedades:
quartos = 2
tipo = “casa”
endereco = “rua teste 123 – ZS”*/

//criado um objeto criado de forma literal e setado em uma constante. Objeto esse com 3 atributos e uma função.
const casa = {
    quartos: 2,
    tipo: "casa",
    endereco: "rua teste 123 – ZS",

    mostra_atributos() {
        return console.log(`${this.tipo} com ${this.quartos} quartos localizada na ${this.endereco}.`)} 
}


casa.mostra_atributos()
