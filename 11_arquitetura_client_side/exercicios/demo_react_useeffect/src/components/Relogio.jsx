import { useState, useEffect } from 'react';

export function Relogio() {
    const [horario, setHorario] = useState(new Date());

    /*O useEffect recebe uma função de callback de 
    um efeito. 
    
    Portanto, para alterar o estado do horario, vamos
    usar um Timer que é algo externo simulando o tic-tac
    do relógio*/
    useEffect(() => {
        function tick() {
            setHorario(new Date());
        }

        const temporizador = setInterval(() => tick(), 1000);
        return () => clearInterval(temporizador);
    }, []);

    return (
        <>
            <h1>Relógio: </h1>
            <h2>{horario.toLocaleTimeString()}</h2>
        </>
    )
}