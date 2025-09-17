function Pessoa(nome, anoDeNascimento, profissao) {
	this.nome = nome;
	this.anoDeNascimento = anoDeNascimento;
	this.profissao = profissao;
	this.calculaIdade = function() {
		return new Date().getUTCFullYear() - this.anoDeNascimento;
		
	};
}

const pessoa1 = new Pessoa('João', 1983, 'Desenvolvedor');
console.log(pessoa1.calculaIdade());

const pessoa2 = new Pessoa('Maria', 2016, 'Estudante');
console.log(pessoa2.calculaIdade());

const pessoa3 = new Object();
pessoa3.nome = 'Pedro';
console.log(typeof pessoa3);
console.log(pessoa3);
console.log(pessoa3.constructor);
console.log(pessoa2.constructor);