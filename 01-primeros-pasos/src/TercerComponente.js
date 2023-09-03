import React from 'react';
import propTypes from 'prop-types';

export const TercerComponente = ({ nombre, ficha }) => {
    return (
        <div>
            <h1>Comunicacion entre componentes</h1>
            <ul>
                <li>Nombre: {nombre}</li>
                <li>Apellido: {ficha.apellido}</li>
                <li>Edad: {ficha.edad}</li>
                <li>Peso: {ficha.peso}</li>
                <li>Altura: {ficha.altura}</li>
                <li>Sexo: {ficha.sexo}</li>
            </ul>
        </div>
    );
};

TercerComponente.propTypes = {
    nombre: propTypes.string.isRequired,
    ficha: propTypes.object.isRequired,
};

TercerComponente.defaultProps = {
    nombre: 'Sin nombre',
    ficha: {
        nombre: 'Sin nombre',
        apellido: 'Sin apellido',
        edad: 0,
        peso: 0,
        altura: 0,
        sexo: 'M',
    },
};
