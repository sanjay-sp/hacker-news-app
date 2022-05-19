import React from "react"
import './SearchContent.css';

const SearchContent = ({image,text}) => {
    return <div className="sectionContent">
        <img src={image} className="sectionImage"/>
        <h2 className="sectionText">{text}</h2>
    </div>
}

export default SearchContent;