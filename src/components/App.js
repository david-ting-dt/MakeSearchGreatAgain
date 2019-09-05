import React from 'react';
import { httpGet } from 'scripts/scripts';

function App() {
    return (
        <div className="app">
            <input placeholder="Search" />
            <button onClick={httpGet}>BUTTTTON</button>
        </div>
    );
}

export default App;
