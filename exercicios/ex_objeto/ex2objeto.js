/*  Corrija o objeto abaixo de forma a não ocorrer erro quando você executar o comando console.log(produtos.jogos.acao[2]).  */


let produtos = {
    videos : {
        comedia: ["comedia1","comedia2"],
        romance: ["romance1", "romance2"]
    },
    revistas : {
        moda: ["lalala", "lililili"],
        saude: ["lalala", "lililili"]
    },
    jogos : {
        rpg: ["rpg1", "rpg2", "rpg3"],
        acao: ["acao1", "God of War"]
    }
}

console.log(produtos.jogos.acao[1])
