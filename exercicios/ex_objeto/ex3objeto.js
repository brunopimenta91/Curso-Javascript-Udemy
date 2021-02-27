/* Altere os dados do objeto e exiba no console o texto abaixo usando as propriedades linha1 e linha2: */

//criado o jeto de forma literal e setado numa variavel de tipo let, com dois atributos
let objetoTexto = {
    linha1: "Olá",
    linha2: "Estudando o que?"
}

//alterando os dois atributos reviamente criado, atraves da notação ' . ' 
objetoTexto.linha1 = 'TCHAU!'
objetoTexto.linha2 = 'jogando Warzone!'

//exibindo na tela os valores atuais dos atributos linha1 e linha2 do objeto objetoTexto
console.log(objetoTexto.linha1, objetoTexto.linha2)
