import React, { useEffect, useState } from "react";
import ResultPage from "./ResultPage";
import SearchBar from "./SearchBar";
import List from "./List/List";

const HomePage = () => {
    const [searchData,setSearchData] = useState("");

    const searchResult = async (value) => {
        await fetch(`http://hn.algolia.com/api/v1/search?query=${value}`).then((res) => {
            return res.json();
        }).then((data)=> {
            setSearchData(data.hits);
        })
    }
    return <div>
        <SearchBar search={searchResult}/>
        {searchData!=="" ? <ResultPage data={searchData}/> : 
        <div></div>}
    </div>
}

export default HomePage;