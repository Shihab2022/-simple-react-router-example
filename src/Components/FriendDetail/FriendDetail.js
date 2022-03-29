import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    //aykany useParams ar moddomy jsy id ta url ay jukto hoi ty say say id ta ky nou a hoay say 
    const {friendId}=useParams()

    //ay kahany ja id t apabo say id diay data load kora hoay say 
    //state ay {} nou hoay say karon data hisaby amra akta object pabo tai
    const [friend,setFriend]=useState({})

    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])

// console.log(friend)

    return (
        <div>
            <h1>this is friend detail page .... {friendId}</h1>
            <p style={{color:"red",fontWeight:'bold',fontSize:"100px",margin:'0px'}} >Friend Detail</p>

                <h1>Name : {friend.name}</h1>
                <h2>Username : {friend.username}</h2>
                <h3>Email : {friend.email}</h3>
                <h4>City : {friend.address?.city}</h4>
                <h5>Lat :{friend.address?.geo?.lat}</h5>
                <h6>Phone :{friend?.phone}</h6>
                <p>Catch Pharase : {friend?.company?.catchPhrase}</p>

        </div>
    );
};

export default FriendDetail;<h1>this is friend detail page ....</h1>

