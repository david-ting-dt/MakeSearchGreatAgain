import React from 'react';
import { debounce } from "lodash";
import searchWordCustomize from '../../Search_word_customize';

const SearchBar = ({ setSearchValue, value, setValue }) => {

    const onChangeHandler = (inputValue) => {
        const value = searchWordCustomize(inputValue);

        const URL = `https://search-clients-hackdays2019-2-l5jsbxllcgxsaxostzcs2uc2im.ap-southeast-2.es.amazonaws.com/demo-in-the-morning/_search?q=*${value}*`


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

        setValue(value);
    }

    const debounceCall = debounce(onChangeHandler, 100);

    return (
        <div className='search-bar'>
            <input placeholder='Search...' onChange={(e) => debounceCall(e.target.value)} />
        </div>
    );
}

export default SearchBar;
