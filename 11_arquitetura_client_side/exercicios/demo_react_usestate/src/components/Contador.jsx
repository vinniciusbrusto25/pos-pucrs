import { useState } from "react";

export function Contador() {
    //     estado    função que altera o estado
    const [contagem, setContagem] = useState(0); // useState passando 0 seta o estado inicial

    function handleClick() {
        //setContagem(contagem + 1); // forma 1: atualiza o estado
        setContagem(contagemAtual => contagemAtual + 1 ); // forma 2: posso passar uma função
    }

    return (
        <>
            <button onClick={handleClick}>Clicar</button>
            <span>Contagem atual: {contagem}</span>
        </>
    )
}