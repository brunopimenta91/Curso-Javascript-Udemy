//₢riado um array de 10 elementos
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//laço for in - varre um array ou objeto a partir do seu indice, passando por todos os elementos (do array) ou atributos (do objeto)
for (x in nums) {
    if(x == 5) {
        break    //sai do laço, o interrompendo. Funciona tanto no while, no for, como tambem no switch.
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue   //interrompe e pula o laço especificado, continuando o laço. Funciona especificamente em laços
    }
    console.log(`${y} = ${nums[y]}`)
}


