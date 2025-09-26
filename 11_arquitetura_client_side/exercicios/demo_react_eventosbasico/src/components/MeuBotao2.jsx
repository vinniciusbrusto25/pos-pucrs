export function MeuBotao2() {
    function handleClick(event) {
        event.stopPropagation();
        alert(`clicou ${event.currentTarget.id}`);
    }

    return (
        <button id="botaoClicavel2" onClick={handleClick}>Clique aqui</button>
    )
}