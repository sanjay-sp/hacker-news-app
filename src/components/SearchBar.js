import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({search}) => {

    const [searchValue, setSearchValue] = useState();

    const onnChangeHandler = (e) => {
        setSearchValue(e.target.value)
    }
    
    return <div className="searchbar">
        <input type='search' placeholder="Enter keyword" name="searchbox" value={searchValue} onChange={onnChangeHandler}/>
        <button type="submit" className="search-button" onClick={()=>search(searchValue)}>Search</button>
    </div>
}

export default SearchBar;