// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = function () {
//         return `${this.nome}, ${this.email}`;
//     }
// }

// const newUser = new User('Jeff', 'jefferson@teste.com')
// console.log(newUser.exibirInfos());

// function Admin(role) {
//     User.call(this, 'Jeff', 'j@gmail.com');
//     this.role = role || 'estudante';
// }

// Admin.prototype = Object.create(User.prototype);
// const newUser = new Admin('admin');
// console.log(newUser.exibirInfos())
// console.log(newUser.role);

const user = { 
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },
    exibirInfos: function() {
        return this.nome;
    }
}


const novoUser = Object.create(user);
novoUser.init('Jeff', 'j@j.com');
console.log(novoUser.exibirInfos());

// console.log(user.isPrototypeOf(novoUser));