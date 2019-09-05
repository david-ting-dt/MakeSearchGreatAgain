import React from 'react';
import { debounce } from "lodash";

const SearchBar = ({setSearchValue, value, setValue}) => {

    const valueHandler = (inputValue) => {
        setValue(inputValue);
    }
    
    const search = e => {
        console.log("search");
        debounce(() => {
            console.log("debounce");
            setValue(e.target.value);
        }, 200, {leading: true});
    }

    // const onClickHandler = () => {
    //     setValue(value)
    // };

    return (
        <div className='search-bar'>
            <input placeholder='Search...' onChange={(e) => valueHandler(e.target.value)} />
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
