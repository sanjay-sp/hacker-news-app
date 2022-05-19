import React, { useState } from "react";
import ResultSection from "../Sections/ResultSection";
import SearchBar from "../SearchBar/SearchBar";
import SearchContent from "../Sections/SearchContent";
import NotFound from '../../public/notfound.png';
import SearchIcon from '../../public/search-icon.png';

const HomePage = () => {
    const [searchData,setSearchData] = useState("");
    console.log(searchData);

    const searchResult = async (value) => {
        await fetch(`https://hn.algolia.com/api/v1/search?query=${value}`).then((res) => {
            return res.json();
        }).then((data)=> {
            setSearchData(data.hits);
        })
    }

    return <div>
        <SearchBar search={searchResult}/>
        {searchData=="" ?  <SearchContent image={SearchIcon} text={'Enter your Search'}/> :
        <ResultSection data={searchData}/>}
    </div>
}

export default HomePage;