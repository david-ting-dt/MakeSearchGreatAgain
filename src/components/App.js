import React, { useState, useEffect } from 'react';
import Modal from 'components/search/Modal';
import SearchBar from 'components/search/SearchBar';
import DisplayArea from 'components/search/DisplayArea';
import logo from '../myob_logo.png';


function App() {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();
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


    const handleCallback = (source) => {
        setShowModal(true);
        setModalData(source);
    }

    return (
        <div className="app">
            <img src={logo} />
            {showModal && <Modal callback={() => setShowModal(false)}
                data={modalData} />}
            <SearchBar setSearchValue={setSearchValue} value={value} setValue={setValue} />
            <DisplayArea data={searchValue} callback={handleCallback} />
        </div>
    );
}

export default App;
