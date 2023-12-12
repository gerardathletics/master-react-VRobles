import { Add } from './components/Add';
import { List } from './components/List';
import { Searcher } from './components/Searcher';
import { useState } from 'react';

function App() {
    const [listState, setListState] = useState([]);

    return (
        <div className="layout">
            <header className="header">
                <h1>MaMovie's</h1>
                <div className="logo">
                    <div className="play"></div>
                </div>
            </header>

            <nav className="nav">
                <ul>
                    <li>
                        <a href="/#">Home</a>
                    </li>
                    <li>
                        <a href="/#">Movies</a>
                    </li>
                    <li>
                        <a href="/#">Blog</a>
                    </li>
                    <li>
                        <a href="/#">Contact</a>
                    </li>
                </ul>
            </nav>

            <section id="content" className="content">
                <List listState={listState} setListState={setListState} />
            </section>

            <aside className="lateral">
                <Searcher listState={listState} setListState={setListState} />
                <Add setListState={setListState} />
            </aside>

            <footer className="footer">&copy; Gerardathletics</footer>
        </div>
    );
}

export default App;
