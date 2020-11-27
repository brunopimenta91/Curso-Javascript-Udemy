//uma constante global
const valor = 'Global'

//função definida com contexto lexico levado em consideração, o valor mostrado será 'Global'
function minhaFuncao() {
    console.log(valor)
}


//função definida com uma chamada a função minhaFuncao(), criada anteriormente.
function exec() {
    const valor = 'Local'   //definida uma cosntante local, de mesmo nome, constante valor
    minhaFuncao()    //chamada da função minhaFuncao() - aqui o valor será 'Global' TAMBEM!
}

//₢hamada da função exec()
exec()   //Valor retornado será 'global', pois a função leva em consideracao o contexto léxico, que define o contexto de QUANDO ela foi definida e o seu contexto. E NÂO de onde ela é chamada.




