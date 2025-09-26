export function AloMundoColorido( {nome, cor} ) {
    const contexto = cor || 'black';

    return (
        <h1 style={ { color: contexto } }>Alô {nome}!</h1>
    );
}