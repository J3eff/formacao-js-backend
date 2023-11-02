const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma unica vez (let indice = 0)
// Segunda expressão: condicação de execução (indice < numeros.length)
// Terceira expressão: é executada sempre ao final do bloco (indice++)

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice])
}