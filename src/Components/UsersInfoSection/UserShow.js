import React from 'react';
import './UserShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const UserShow = (props) => {
    // const usersData = props.usersData;
    const usersData = props.usersData;
    const {id,name, img, email, username} = usersData;
    console.log(usersData);
    const handleBtnEvent = props.handleBtnEvent;
    // console.log(handleBtnEvent());
    return (
        <>
            <div className="divUserDisplay">
                 <div className="userDisplay">
                    <div><img src={img} alt="" /></div>
                    <div>
                        <h4>{name}</h4>
                        <h5>User ID : {id}</h5>
                        <h5>User Name : {username}</h5>
                        <h5>{email}</h5>
                        <button onClick={()=>handleBtnEvent(usersData)}><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>Add Friend</button>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default UserShow;