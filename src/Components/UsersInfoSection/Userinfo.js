import React, { useEffect, useState } from 'react';
import Sideber from './Sideber';
import UserShow from './UserShow';
import './Userinfo.css';
const Userinfo = (props) => {
    const usersData = props.usersData;
    const handleBtnEvent = props.handleBtnEvent;
   // console.log(usersData);
    return (
        <>
            <div className="usersInfoSec">
                <div className="userInfoBody">
                    {
                        usersData.map(users => <UserShow usersData={users} handleBtnEvent={handleBtnEvent} key={users.id}></UserShow>)
                    }
                </div>
                <div>
                    <Sideber></Sideber>
                </div>
            </div>
        </>
    );
};

export default Userinfo;