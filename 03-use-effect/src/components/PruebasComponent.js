import React, { useState } from 'react';

export const PruebasComponent = () => {
    const [user, setUser] = useState('Gerard');

    const modUser = (e) => {
        setUser(e.target.value);
    };

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
