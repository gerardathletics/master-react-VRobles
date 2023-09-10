import React, { useState } from 'react';

export const Ejercicio = ({ year }) => {
    const [currentYear, setCurrentYear] = useState(year);

    const aumentar = (e) => {
        setCurrentYear(currentYear + 1);
    };

    const disminuir = (e) => {
        setCurrentYear(currentYear - 1);
    };

    const changeYear = (e) => {
        const number = parseInt(e.target.value);

        if (Number.isInteger(number)) {
            setCurrentYear(number);
        } else {
            setCurrentYear(currentYear);
            // alert('El año debe ser un número entero');
        }
    };

    return (
        <div>
            <h2>Ejercicio</h2>
            <strong className="label label-green">Año actual: {currentYear}</strong>
            <p>
                <button className="btn" onClick={disminuir}>
                    Disminuir año
                </button>
                &nbsp;
                <button className="btn" onClick={aumentar}>
                    Aumentar año
                </button>
            </p>
            <p>
                <input type="text" value={currentYear} onChange={(e) => changeYear(e)} />
            </p>
        </div>
    );
};
