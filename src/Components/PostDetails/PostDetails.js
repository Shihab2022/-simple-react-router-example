import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const PostDetails = () => {
    const {postId}=useParams();

    const [post,setPost]=useState({})

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    }, [postId])
// console.log(post)

    return (
        <div>
            <h1>This is post detiles page number : {postId}</h1>

            <h2>Title : {post.title}</h2>
            <h5>Title : {post.body}</h5>
           
        </div>
    );
};

export default PostDetails;