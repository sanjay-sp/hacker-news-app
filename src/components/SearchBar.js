import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({search}) => {

    const [searchValue, setSearchValue] = useState();

    const onnChangeHandler = (e) => {
        setSearchValue(e.target.value)
    }

    const onEnter = (e) => {
        e.preventDefault();
        search(searchValue)
    }

    return <div className="searchbar">
        <form onSubmit={onEnter}>
        <input type='search' placeholder="Enter keyword" name="searchbox" value={searchValue} onChange={onnChangeHandler}/>
        <button type="submit" className="search-button" onClick={()=>search(searchValue)}>Search</button>
        </form>
    </div>
}

export default SearchBar;