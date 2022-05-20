import React, { useEffect, useState } from 'react';
import Comment from '../Comments/Comment';
import { urlConverter } from '../../utils/urlConverter';
import './PostPage.css';

const PostPage = () => {
    
    const [post,setPost] = useState("");

    useEffect(()=>{
        fetch(`https://hn.algolia.com/api/v1/items${window.location.pathname}`).then((res)=>{
            return res.json();  
        }).then((data)=>{setPost(data)});
    },[])

    
    return <>
        {post==="" ? <div className='loader'></div> :
        <div className='postpage'>
            <div>
                <h1 className='postTitle'>{post.title}</h1>
            </div> 
        <p className='postDetails'><span className='point-num'>{post.points} points</span>. Created by <i>{post.author}</i></p>
        <a href={post.url} className="postUrl" target="_blank">({urlConverter(post.url)})</a>
        <div className='comments'>
            <h4>Comments:</h4>
            {post.children.map((item)=> {
                const htmStr = item.text;
                const doc = new DOMParser().parseFromString(htmStr, "text/html");
                console.log(item);
                try {
                    return <Comment key={item.objectID} comment={doc.body.getElementsByTagName('p')[0].innerText}
                            author={item.author} date={item.created_at_i} children={item.children}/>
                } catch (error) {
                    console.log(error);
                }
            })}
        </div>
        </div>}
    </>
}

export default PostPage;