const listaLivros = require('./array')
const trocaLugar = require('./encontraMenores')

function quickSort(array, esqueda, direita) {

    if (array.length > 1) {
        let indiceAtual = particiona(array, esqueda, direita);
    }


    return array;
}

function particiona(array, esqueda, direita) {
    let pivo = array[Math.floor((esqueda + direita) / 2)]
    let atualEsquerda = esqueda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        while (array[atualDireita].preco < pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }

    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))