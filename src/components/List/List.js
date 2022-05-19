import React from "react";
import {timeConverter} from "../../utils/timeConverter";
import './List.css'

const List = ({title, author, points, date}) => {
    return <>
        {title!==null ? <div className="list">
        <div className="heading">
            <h4 className="h4">{title}</h4>
        </div>
        <div className="points-time">
        <span className="points">{points} points by {author}</span>
        <span className="list-time">{timeConverter(date)} ago</span>
        </div>
    </div> : null}
    </>
}

export default List;