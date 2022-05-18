import React from "react";
import './Comment.css';

const Comment = ({comment, author}) => {
    return <div className="comment-list">
        <h5 className="author">{author}</h5>
        <p className="comment-content">{comment}</p>
    </div>
}

export default Comment;