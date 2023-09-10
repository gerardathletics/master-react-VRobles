import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { Ejercicio } from './components/Ejercicio';

function App() {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <h1>El estado en React: useState</h1>
                <hr />
                <MiPrimerEstado />
                <hr />
                <Ejercicio year={currentYear} />
            </header>
        </div>
    );
}

export default App;
