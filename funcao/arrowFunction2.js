//exemplo de função descrita no exercicio thisEBind2.js, mas agora sendo uma FUNÇÃO ARROW

function pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa



