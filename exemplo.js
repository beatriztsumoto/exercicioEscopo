const pessoa1 = {
    nome: 'João',
    idade: 16,
    falar: function() {
        console.log("meu nome é " + this.nome + " e minha idade é " + this.idade);
    }
}

pessoa1.falar();



const usuario = {
    nome: 'Maria',
    logar: function() {
        setTimeout(() => {
            console.log("Olá, meu nome é usuario " + this.nome);
        }, 1000);
    }
};

usuario.logar();

const pessoa  = {
    nome: 'Carlos',
    falar () {
        console.log("Olá, meu nome é " + this.nome);
    }
};

pessoa.falar();