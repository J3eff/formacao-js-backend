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

cliente.enderecos.push({
    rua: "R. São Pedro",
    numero: 905,
    apartamento: false
});

const listaApenasApartamentos = cliente.enderecos.filter(endereco => endereco.apartamento === true);

console.log(listaApenasApartamentos);