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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefones)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda);