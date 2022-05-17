import React from "react";

const ResultPage = ({data}) => {
    // data.map((res)=>{
    //     console.log(res.title);
    // })
    return <div>
        {data.map((item)=><p key={item.object}>{item.title}</p>)}
    </div>
}

export default ResultPage;