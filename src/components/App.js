import React, { useState } from 'react';
import { httpGet } from '../scripts/scripts';
import { hits } from '../sample_es_data.json';

import SearchBar from 'components/search/SearchBar';
import Contents from 'components/search/Contents';

function App() {
    const [data, setData] = useState(hits.hits);
    // const promise = new Promise((resolve, reject) => {
    //     httpGet().then(response => resolve(response));
    // });

    const onClickHandler = () => {
        // promise.then(response => {
        //     setData(response);

        // })
    }

    const clients = data.map(client => {
        const { _id: id, _source: source } = client;
        const { firstname, lastname } = source;
        return (
            <div key={id}>
                <div>{firstname}</div>
                <div>{lastname}</div>
            </div>
        )
    });

    return (
        <div className="app">
            <SearchBar />
            <Contents />
        </div>
    );
}

export default App;
