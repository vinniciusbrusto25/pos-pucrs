import { useReducer } from "react";

/*O estado é um objeto que contém um atributo/propriedade 
chamado contagem. A ação também é um objeto que contém um
"type" que determina o que deve ser feito com o estado

Esse exemplo representa o que usualmente é conhecido como 
máquina de transição de estados.
*/

function reducer(estado, acao) {
    switch (acao.type) {
        case 'incremento': {
            return { contagem: estado.contagem + acao.valor };
        }
        case 'decremento': {
            return { contagem: estado.contagem - 1 };
        }
        default: {
            throw new Error(`Tipo de ação desconhecida: ${acao.type}`);
        }
            
    }
}

export function Contador() {
    const estadoInicial = { contagem: 0};
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    const handleClickMais = () => {
        dispatch({ type: 'incremento', valor: 2});
    };

    const handleClickMenos = () => {
        dispatch({ type: 'decremento'});
    };

    return (
        <>
            <button onClick={handleClickMais}>+</button>
            <button onClick={handleClickMenos}>-</button>
            <span>contagem: ${estado.contagem}</span>
        </>
    )
}