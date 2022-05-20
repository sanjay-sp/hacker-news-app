import React from "react";
import {timeConverter} from "../../utils/timeConverter";
import './Comment.css';

const Comment = ({comment, author, date, children}) => {
    return <div>
            <div className="comment-list">
        <h5 className="author">{author}</h5>
        <p className="comment-time">{timeConverter(date)} ago</p>
        <p className="comment-content">{comment}</p>
    </div>
    <div className="child-class">
    {children.length!==0 ? children.map((child)=>{
        const htmStr = child.text;
        const doc = new DOMParser().parseFromString(htmStr, "text/html");
        try {
            return <Comment key={child.id} comment={doc.body.getElementsByTagName('p')[0].innerHTML} author={child.author} date={child.created_at_i} children={child.children}/>
        } catch (error) {
            console.log(error)
        }
         
    }) : <></>}
    </div>
    </div>
    
}

export default Comment;