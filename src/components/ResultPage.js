import React from "react";
import { Link } from "react-router-dom";
import List from "./List/List";
import './ResultPage.css';

const ResultPage = ({data}) => {
    console.log(data)
    const titleCheck = (title) => {
        if(title!==''){
            return title
        } 
    }
    return <div className="newscontainer">
        {data.map((item)=>{
            if (item.title !== "") {
                return <Link to={`/${item.objectID}`}><List key={item.objectID} 
                title={item.title}
                points={item.points}
                author={item.author}
                date={item.created_at_i}
                /></Link>  
            }
        })}
    </div>
}

export default ResultPage;