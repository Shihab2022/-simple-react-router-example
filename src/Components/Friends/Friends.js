import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setFriends]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h1>this is all friends page ..</h1> 
            <p > <span style={{color:"red",fontWeight:'bold',fontSize:"200px"}} >Friends</span></p>

            {
                friends.map(friend=> <Friend friend={friend} key={friend.id}></Friend>)
            }
   
        </div> 
    );
};

export default Friends;