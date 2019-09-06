import React from 'react';
import { debounce } from "lodash";

const SearchBar = ({ setSearchValue, value, setValue }) => {

    const onChangeHandler = (inputValue) => {
        const URL = `https://search-clients-hackdays2019-2-l5jsbxllcgxsaxostzcs2uc2im.ap-southeast-2.es.amazonaws.com/demo-in-the-morning/_search?q=*${inputValue}*`


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

        setValue(inputValue);
    }

    // const search = e => {
    //     console.log("search");
    //     debounce(() => {
    //         console.log("debounce");
    //         setValue(e.target.value);
    //     }, 200);
    // }

    // const onClickHandler = () => {
    //     setValue(value)
    // };

    const debounceCall = debounce(onChangeHandler, 100);

    return (
        <div className='search-bar'>
            <input placeholder='Search...' onChange={(e) => debounceCall(e.target.value)} />
            <button
                className='search-button'
            // onClick={onClickHandler}
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
