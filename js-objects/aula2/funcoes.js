const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefones: ["11911112222", "11933334444"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo)
            console.log("Saldo insuficiente")
        else {
            this.saldo -= valor
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
};

cliente.efetuaPagamento(250);
cliente.efetuaPagamento(20);
