import React from "react";
import List from "./List/List";

const ResultPage = ({data}) => {
    // data.map((res)=>{
    //     console.log(res.title);
    // })
    console.log(data)
    return <div>
        {data.map((item)=><List key={item.objectID} 
            title={item.title}
            points={item.points}
            author={item.author}/>)}
    </div>
}

export default ResultPage;