const listaLivros = require('./array')

function quickSort(array, esqueda, direita) {

    if (array.length > 1) {
        let varTemp = particiona(array, esqueda, direita)
    }


    return array;
}

function particiona(array, esqueda, direita) {
    let pivo = array[Math.floor((esqueda + direita) / 2)]
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))