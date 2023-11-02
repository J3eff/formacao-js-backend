const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach((nota, i) => {
    somaDasNotas += nota;
    console.log(i)
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`)