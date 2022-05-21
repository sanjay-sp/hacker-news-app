import React from "react";
import { Link } from "react-router-dom";
import List from "../List/List";
import './ResultSection.css';

const ResultSection = ({data}) => {

    return <div className="newscontainer">
        {data.map((item)=>{
            if (item.title !== "") {
                return <Link to={`/${item.objectID}`} target="_blank"><List key={item.objectID} 
                title={item.title}
                points={item.points}
                author={item.author}
                date={item.created_at_i}
                /></Link>  
            }
        })}
    </div>
}

export default ResultSection;