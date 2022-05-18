import React, { useEffect, useState } from 'react';
import './PostPage.css';

const NewsPage = () => {
    
    const [post,setPost] = useState("");
    console.log(post)
    useEffect(()=>{
        fetch(`http://hn.algolia.com/api/v1/items${window.location.pathname}`).then((res)=>{
            return res.json();
        }).then((data)=>setPost(data));
    },[])

    
    return <>
        {post==="" ? <div className='loader'></div> :
        <div className='postpage'>
        <h3>{post.title}</h3> 
        <p>{post.points} points. Created by {post.author}</p>
        </div>}
    </>
}

export default NewsPage;