import React from "react";
import {timeConverter} from "../utils/timeConverter";
import './Comment.css';

const Comment = ({comment, author, date}) => {
    return <div className="comment-list">
        <h5 className="author">{author}</h5>
        <p className="comment-time">{timeConverter(date)} ago</p>
        <p className="comment-content">{comment}</p>
    </div>
}

export default Comment;