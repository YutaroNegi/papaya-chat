import React, {useState} from "react";

import { Button, Input } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

import Toaster, {success} from "./Toaster";

import { useSelector, useDispatch } from 'react-redux'
import { setRoom } from '../redux/roomSlice'

import io from "socket.io-client";
const socket = io('/');


function Sidebar(){
    const dispatch = useDispatch();
    const [show, setShowInput] = useState(false);
    const [roomName, setRoomName] = useState('');
    const user = useSelector((state) => state.user)
    let navigate = useNavigate();

    function handleShow(){
        setShowInput(!show)
    }

    function connectPrivateRoom(){
        socket.emit('switchRoom', roomName);
        dispatch(setRoom(roomName))
        success('Private room created!')
    }

    function handleRoomName(e){
        setRoomName(e.target.value)
    }

    function logout(){
        socket.disconnect()
        navigate('/')
    }

    return(
        <div className="sidebar bg-dark">
            <h5 className="usernameTxt text-white text-center">{user.username} | #{user.userID}</h5>
            <Button primary className="mt-20">Global Chat &nbsp;&nbsp;<i className="users icon"></i></Button>
            <Button onClick={handleShow} primary className="mt-20">Private Room  &nbsp;&nbsp;<i className="user icon"></i></Button>
            {show && <Input onChange={handleRoomName} className="mt-20" placeholder='Room Code' />}
            {show && <Button onClick={connectPrivateRoom} primary className="mt-20">Private Chat  &nbsp;&nbsp;<i className="arrow right icon"></i></Button>}
            <Button onClick={logout} primary className="mt-20 logoutBtn">Logout&nbsp;&nbsp;&nbsp;&nbsp;<i className="logout icon"></i></Button> 
            <Toaster />
        </div>
    )
}

export default Sidebar