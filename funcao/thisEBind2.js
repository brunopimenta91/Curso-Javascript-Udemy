//metodo 1 como atrelar um atributo de uma função - usando bind()
function pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa



//metodo 2 como atrelar um atributo de uma função - usando uma constante e setando o this nela.

/*  

function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa


*/
