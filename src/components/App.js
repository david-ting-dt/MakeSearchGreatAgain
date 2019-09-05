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
        console.log("onclick")

    }


    return (
        <div className="app">
            <SearchBar onClick={onClickHandler} />
            <Contents data={data} />
        </div>
    );
}

export default App;
