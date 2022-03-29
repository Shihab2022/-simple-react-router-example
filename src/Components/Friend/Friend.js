import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,username ,id}=friend;

    //useNavigate use kora hoay say data taky url ay jok korar jonno 
    let navigate =useNavigate()
    const friendDetails=()=>{
        navigate(`/friend/${id}`)  //ay takay omara onno vaby korty pai  {'/friend/'+id}
    }
    return (
        <div>
         <h3>Name : {name}</h3>
         <button onClick={friendDetails}>{username} id: {id}</button>

        </div>
    );
};

export default Friend;