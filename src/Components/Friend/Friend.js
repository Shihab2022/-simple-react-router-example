import React from 'react';

const Friend = ({friend}) => {
    const {name,username ,id}=friend;
    return (
        <div>
         <h3>Name : {name}</h3>
         <button>{username} id: {id}</button>

        </div>
    );
};

export default Friend;