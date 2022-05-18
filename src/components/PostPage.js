import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import './PostPage.css';

const NewsPage = () => {
    
    const [post,setPost] = useState("");
    var parser = new DOMParser();
    console.log(post)
    useEffect(()=>{
        fetch(`http://hn.algolia.com/api/v1/items${window.location.pathname}`).then((res)=>{
            return res.json();
        }).then((data)=>setPost(data));
    },[])

    
    return <>
        {post==="" ? <div className='loader'></div> :
        <div className='postpage'>
            <div>
                <h3 className='postTitle'>{post.title}</h3>
                <p className="postUrl">({post.url})</p>
            </div> 
        <p>{post.points} points. Created by {post.author}</p>
        <div className='comments'>
            <h4>Comments:</h4>
            {post.children.map((item)=> {
                const htmStr = item.text;
                const doc = new DOMParser().parseFromString(htmStr, "text/html");
                try {
                    return <Comment comment={doc.body.getElementsByTagName('p')[0].innerText}
                            author={item.author} time={item.created_at}/>
                } catch (error) {
                    console.log(error);
                }
            })}
        </div>
        </div>}
    </>
}

export default NewsPage;