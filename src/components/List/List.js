import React from "react";
import { Link } from "react-router-dom";
import './List.css'

const List = ({title, author, points}) => {
    return <div className="list">
        <div className="heading">
            <Link to='/'><h4 className="h4">{title}</h4></Link>
        </div>
        <p className="points">{points} points by {author} 3hrs ago</p>
    </div>
}

export default List;