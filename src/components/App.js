import React from 'react';
import { httpGet } from '../scripts/scripts';
import '../styles/App.scss';

function App() {
    return (
        <div className="App">
            <input
                placeholder="Search"

            />
            <button onClick={httpGet}>BUTTTTON</button>
        </div>
    );
}

export default App;
