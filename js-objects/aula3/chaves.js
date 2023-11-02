const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefones: ["11911112222", "11933334444"],
}

// cliente.enderecos = [
//     {
//         rua: "R. Bento da silva",
//         numero: 1337,
//         apartamento: true,
//         complemento: "ap 71"
//     },
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes("enderecos"))
    console.error("Erro. É necessário ter um endereço cadastrado.")
