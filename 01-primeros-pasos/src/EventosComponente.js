import React from 'react';

export const EventosComponente = () => {
    const saludar = (e, nombre) => {
        alert('Hola ' + nombre);
    };

    const hasDadoDobleClick = (e) => {
        alert('Has dado doble click');
    };

    const hasEntrado = (e) => {
        document.getElementById('caja').style.background = 'darkblue';
    };

    const hasSalido = (e) => {
        document.getElementById('caja').style.background = 'lightblue';
    };

    return (
        <div>
            <h1>Eventos en componentes</h1>
            <button onClick={(e) => saludar(e, 'Gerard')}>Saludar</button>

            <button onDoubleClick={hasDadoDobleClick}>Doble click</button>

            <div id="caja" onMouseEnter={hasEntrado} onMouseLeave={hasSalido}>
                <p>Pasa por encima</p>
            </div>

            <p>
                <input
                    type="text"
                    onFocus={(e) => (e.target.style.background = 'lightgreen')}
                    onBlur={(e) => (e.target.style.background = 'white')}
                    placeholder="Introduce tu nombre"
                />
            </p>
        </div>
    );
};
