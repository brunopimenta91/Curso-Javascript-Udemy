/* 6) Fazer um programa para encontrar todos os pares entre 1 e 100. */

const pares = () => {
    for(let conta = 1; conta <= 100; conta++){
        if(conta % 2 == 0) {
            console.log(conta)
        }
    }

}

//chamada a função arrow presente na constante pares()
pares()