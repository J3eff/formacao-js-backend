const listaLivros = require('./arrays');

function mergeSort(array) {
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = orderna(parte1, parte2)
    }

    return array;
}

function orderna(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualPart1 = parte1[posicaoAtualParte1];
        let produtoAtualPart2 = parte2[posicaoAtualParte2];

        if (produtoAtualPart1.preco < produtoAtualPart2.preco) {
            resultado.push(produtoAtualPart1);
            posicaoAtualParte1++;
        } else {
            resultado.push(produtoAtualPart2);
            posicaoAtualParte2++;
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros));