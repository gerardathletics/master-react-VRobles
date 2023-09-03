import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
    const ficha_medica = {
        nombre: 'Gerard',
        apellido: 'Perez',
        edad: 25,
        peso: 80,
        altura: 1.8,
        sexo: 'M',
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hola</p>
                <div className="componentes">
                    <hr />
                    <EventosComponente />
                    <hr />
                    <MiComponente />
                    <hr />
                    <SegundoComponente />
                    <hr />
                    <TercerComponente nombre="Gerard" ficha={ficha_medica} />
                </div>
            </header>
        </div>
    );
}

export default App;
