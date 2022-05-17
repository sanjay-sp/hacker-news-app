import React from "react";
import List from "./List/List";
import './ResultPage.css';

const ResultPage = ({data}) => {
    console.log(data)
    return <div className="newscontainer">
        {data.map((item)=><List key={item.objectID} 
            title={item.title}
            points={item.points}
            author={item.author}/>)}
    </div>
}

export default ResultPage;