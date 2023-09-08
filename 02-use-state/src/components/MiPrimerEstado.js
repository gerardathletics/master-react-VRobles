import React, { useState } from 'react';

export const MiPrimerEstado = () => {
    // ASI NO FUNCIONA
    // let nombre = 'Juan';

    // const cambiarNombre = (e) => {
    //     nombre = 'Pedro';
    // };

    // ASI SI FUNCIONA
    const [nombre, setNombre] = useState('Juan');

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    };

    return (
        <div>
            <h3>Componente: MiPrimerEstado</h3>
            <strong className="label"> {nombre}</strong>
            &nbsp;
            <button onClick={(e) => cambiarNombre(e, 'Pedro')}>Cambiar nombre por Pedro</button>
            &nbsp;
            {/* Podemos usar onChange o onKeyUp... - Tambien se necesita target.value*/}
            <input type="text" placeholder="Cambia el nombre" onChange={(e) => cambiarNombre(e, e.target.value)} />
        </div>
    );
};
