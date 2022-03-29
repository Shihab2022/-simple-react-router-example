import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res=>res.json())
       .then(data =>setPosts(data))
    },[])
    return (
        <div>
            <h2>Every post ever had : {posts.length}</h2>
            {
                posts.map(post =>
                    <Link
                    key={post.id}
                    to={`/posts/${post.id}`}>   {post.id}
                     </Link>
                    )
            }
             <Outlet/>
        </div>
    );
};

export default Posts;