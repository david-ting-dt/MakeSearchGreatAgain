import React, { useState, useEffect } from 'react';
import SearchBar from 'components/search/SearchBar';
import DisplayArea from 'components/search/DisplayArea';


function App() {
    const [value, setValue] = useState(":");
    const [searchValue, setSearchValue] = useState();

    const URL = `https://search-clients-hackdays2019-2-l5jsbxllcgxsaxostzcs2uc2im.ap-southeast-2.es.amazonaws.com/demo-in-the-morning/_search?q=*${value}*`


    useEffect(() => {
        const status = (response) => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        }

        fetch(URL)
            .then(status)
            .then(response => response.json())
            .then(data => setSearchValue(data.hits.hits));
    }, [])


    return (
        <div className="app">
            <SearchBar setSearchValue={setSearchValue} value={value} setValue={setValue} />
            <DisplayArea data={searchValue} />
        </div>
    );
}

export default App;
