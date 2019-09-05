import React from 'react';

const SearchBar = props => {
    return (
        <div className='search-bar'>
            <input placeholder='Search...' />
            <button className='search-button' onClick={props.onClick}>Search</button>
        </div>
    );
}

export default SearchBar;
