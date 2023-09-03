import React from 'react';

const MiComponente = () => {
    // const nombre = 'Gerard';
    // const web = 'https://www.google.com';

    let usuario = {
        nombre: 'Gerard',
        apellido: 'Porras',
        web: 'https://www.google.com',
    };

    return (
        <div className="mi-componente">
            <h1>Hola Mundo</h1>
            <p>Este es mi componente</p>
            <h2>{usuario.nombre}</h2>
            <h3>{usuario.apellido}</h3>
            <a href={usuario.web}>Ir a Google</a>
        </div>
    );
};

export default MiComponente;
