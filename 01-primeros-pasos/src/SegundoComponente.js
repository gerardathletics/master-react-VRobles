import React from 'react';

export const SegundoComponente = () => {
    const libros = ['El señor de los anillos', 'El hobbit', 'El silmarillion'];

    return (
        <div className="segundo-componente">
            <h1>Lista de libros</h1>
            {libros.length >= 1 ? (
                <ul>
                    {libros.map((libro, index) => {
                        return <li key={index}>{libro}</li>;
                    })}
                </ul>
            ) : (
                <h3>No hay libros</h3>
            )}
        </div>
    );
};
