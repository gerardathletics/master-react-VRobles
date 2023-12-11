import React, { useState, useEffect } from 'react';

export const PruebasComponent = () => {
    const [user, setUser] = useState('Gerard');

    const modUser = (e) => {
        setUser(e.target.value);
    };

    useEffect(() => {
        console.log('Has cargado el componente');
    }, [user]);

    return (
        <div>
            <h1>Hook useEffect</h1>
            <strong className="label">Hola {user}</strong>
            &nbsp;
            <form>
                <input type="text" placeholder="Cambia el nombre" onChange={modUser} />
            </form>
        </div>
    );
};
