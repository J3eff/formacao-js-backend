const nomes = ["Evaldo", "Mari", "Camis"]

nomes.forEach(function(nome) {
    console.log(nome)
})

console.log("#---------------#")


nomes.forEach(nome => {
    console.log(nome)
})

console.log("#---------------#")

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);