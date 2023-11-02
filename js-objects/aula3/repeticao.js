const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefones: ["11911112222", "11933334444"],
}

cliente.enderecos = [
    {
        rua: "R. Bento da silva",
        numero: 1337,
        apartamento: true,
        complemento: "ap 71"
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function')
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
}