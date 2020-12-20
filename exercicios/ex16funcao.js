/* 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui” */


    function frase_categoria(categoria) {
        let frase

        switch(categoria) {
            case 'hatch':
                frase = 'Compra efetuada com sucesso'
                break;
            case 'sedan':
            case 'motocicleta':
            case 'caminhonete':
                frase = 'Tem certeza que prefere este modelo?'
                break;
            default:
                frase = 'Não trabalhamos com este tipo de automóvel aqui'
        }

        return frase
    }


console.log(frase_categoria('hatch'))
console.log(frase_categoria('caminhonete'))
console.log(frase_categoria('canoa'))
