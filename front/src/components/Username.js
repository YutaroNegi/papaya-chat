import React, {useState} from "react";
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux'
import { setUser } from '../redux/userSlice'

function Username(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handleEnter(e){
        if (e.keyCode === 13) {
            getUserID()
        }
    }


    async function getUserID(){
        let response = await fetch('/api/login')
        let data = await response.json()

        let user = {
            username: username,
            userID: data.userID
        }

        dispatch(setUser(user))
        navigate('/home')
    }

    return(
        <div className="container bg-dark">
            <h4 className="text-blue usernameTitle">Username</h4>
            <Input onKeyDown={handleEnter} onChange={handleUsernameChange} className="usernameInput mt-20" placeholder='Username' />
            <Button onClick={getUserID} primary className="mt-20">Start Chatting</Button>
        </div>
        
    )
}

export default Username