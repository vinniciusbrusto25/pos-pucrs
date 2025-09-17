class ValidadorCPF {
    static TAMANHO_CPF = 11;
    static validar(tamanho) {
        return (tamanho == this.TAMANHO_CPF);
    }
}

console.log(ValidadorCPF.validar('234'.length));
console.log(ValidadorCPF.validar('00011122233'.length));