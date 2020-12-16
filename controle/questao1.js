const array_endereco_virtual = []
const array_deslocamento_virtual = []
const array_endereco_fisico = []
const array_pagina_match_frame = []
const array_deslocamento_pagina_match_frame = []

//preenchido um array com todos os endereços de paginas de processos em memoria secundaria e seus respectivos deslocamentos
for (let i = 0; i < 100; i++) {
    array_endereco_virtual.push(i)

    array_deslocamento_virtual.push(Math.floor(Math.random() * 10 + 1))

}

//preenchido array com todos os endereços fisicos disponiveis e presentes na memoria RAM
for (let i = 0; i < 100; i++) {

    let convertido = parseInt(i, 10).toString(2);

    array_endereco_fisico.push(convertido)

}

//tabela de pages acessada pela MMU, quando encontra uma pagina correspondente ao frame na RAM
for (let i = 0; i < 100; i++) {
    if (parseInt(array_endereco_virtual[i], 10).toString(2) == array_endereco_virtual[i]) {
        array_pagina_match_frame.push(array_endereco_virtual[i])
        array_deslocamento_pagina_match_frame.push(array_deslocamento_virtual[i])
    }

}


//frames presentes na RAM e seus deslocamentos.
for(let i in notas) {
    console.log(`frame: ${array_pagina_match_frame[i]} / deslocamento: ${array_deslocamento_pagina_match_frame[i]}`)
}
