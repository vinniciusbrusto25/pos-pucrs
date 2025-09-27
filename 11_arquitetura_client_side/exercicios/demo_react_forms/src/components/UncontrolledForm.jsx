import { useRef } from 'react';

export function UncontrolledForm() {
    const nomeInputRef = useRef();
    const jediInputRef = useRef();
    const nomeInputDefault = 'Luke';
    const jediInputDefault = true;

    /* Uncontrolled porque não está sendo guardado
    o estado dos inputs em um state do React.  Estamos pegando o valor
    diretamente do DOM com useRef.
    */

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nome: ${nomeInputRef.current.value} Jedi: ${jediInputRef.current.checked}`);
    };

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Nome</p>
                        <input type="text" name='nome' ref={nomeInputRef} defaultValue={nomeInputDefault} />
                    </label>
                    <label>
                        <p>Jedi</p>
                        <input type="checkbox" name='jedi' ref={jediInputRef} defaultValue={jediInputDefault} />
                    </label>
                </fieldset>
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}