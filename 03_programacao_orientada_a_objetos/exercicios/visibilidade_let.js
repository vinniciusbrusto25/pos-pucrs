function Pessoa(anoNascimento, nomeParam) {
    let ano = anoNascimento;
    let nome = nomeParam;

    this.ola = function() {
        console.log(`Olá, meu nome é ${nome}, tenho ${new Date().getFullYear() - ano} anos de idade.`);
    }
}

const p1 = new Pessoa(1991, 'Vinicius');
p1.ola();
console.log(p1);