import React from "react";
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'


function Sidebar(){
    const user = useSelector((state) => state.user)
    let navigate = useNavigate();
    return(
        <div className="sidebar bg-dark">
            <h5 className="usernameTxt text-white text-center">{user.username} | #{user.userID}</h5>
            <Button primary className="mt-20">Global Chat &nbsp;&nbsp;<i className="users icon"></i></Button>
            <Button primary className="mt-20">Private Chat  &nbsp;&nbsp;<i className="user icon"></i></Button>

            <Button onClick={()=>{navigate('/');}} primary className="mt-20 logoutBtn">Logout&nbsp;&nbsp;&nbsp;&nbsp;<i className="logout icon"></i></Button>
        </div>
    )
}

export default Sidebar