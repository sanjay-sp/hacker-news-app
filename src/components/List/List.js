import React from "react";
import {timeConverter} from "../../utils/timeConverter";
import './List.css'

const List = ({title, author, points, date}) => {
    return <div className="list">
        <div className="heading">
            <h4 className="h4">{title}</h4>
        </div>
        <p className="points">{points} points by {author} {()=>timeConverter(date)} ago</p>
    </div>
}

export default List;