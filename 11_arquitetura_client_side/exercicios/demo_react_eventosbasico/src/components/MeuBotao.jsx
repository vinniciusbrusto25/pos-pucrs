export function MeuBotao() {
    function handleClick() {
        alert("Clicou no botão!");
    }

    return (
        <button id="botaoClicavel" onClick={handleClick}>Clique aqui</button>
    );
}