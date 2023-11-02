const pessoa = {
    nome: "Luma",
    profissao: "Engenheira"
};

console.log(pessoa.nome)
console.log(pessoa.telefone)

pessoa.telefone = "11 922223333"

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa)

const novaPessoa = {
    nome: "Pedro"
}

// Vai gerar erro, pois pessoa é uma constante
//pessoa = novaPessoa
