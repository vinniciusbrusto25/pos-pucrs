class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome,
        this.anoDeNascimento = anoDeNascimento,
        this.profissao = profissao
    };

    ola() {
        console.log("Olá, eu sou " + this.nome);
    }

    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa1 = new Pessoa('João', 1990, 'Estudante');
console.log(pessoa1);

pessoa1.ola();
console.log(pessoa1.calculaIdade());

class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, 'Estudante');
        this.matricula = matricula;
    };
    //sobrescrita
    ola() {
        super.ola();
        console.log('Olá colegas');
    }
}

const estudante1 = new Estudante('Pedro', '1991', 44578);
console.log(estudante1);
estudante1.ola();
console.log(estudante1.__proto__); //Herdando de Pessoa
console.log(Pessoa.__proto__ === Function.prototype); //curiosidade

class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao) {
        super(nome, anoDeNascimento, 'Professor');
        this.titulacao = titulacao;
    }
}

const prof1 = new Professor('Marta', 1970, 'Mestre');
console.log(prof1);

estudante1.ola();