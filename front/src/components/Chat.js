import React, { useState } from "react";

import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

import io from "socket.io-client";
const socket = io('/');

function Chat(){
    const [messageArray, setMessageArray] = useState([])
    const [message, setMessage] = useState('');
    const user = useSelector((state) => state.user)
    const room = useSelector((state) => state.room)
    console.log('sala conectada:', room);

    function handleMessage(e){
        setMessage(e.target.value);
    }

    function handleEnter(e){
        if (e.keyCode === 13) {
            sendMessage()
        }
    }

    function sendMessage(){
        if(message === '') return

        let msgObj = {
            username: user.username,
            message: message,
            userID: user.userID
        }

        socket.emit('msg', msgObj, room)
        setMessage('')
    }

    socket.on('msg', data=>{
        setMessageArray([...messageArray, data])
    })

    return(
        <div className="chatBox">
            <div className="chatBody">
                <table>
                    <tbody>
                        {messageArray.map( msg => {
                            if(msg.userID === user.userID){
                            return <tr> 
                                        <td></td>
                                        <th className="th-sent"><span className="text-white usernameChat">{msg.username}</span> <div className="sent">{msg.message}</div></th> 
                                    </tr> 
                            }else{
                                return <tr> 
                                            <th className="th-received"><span className="text-white usernameChatReceived">{msg.username}</span><div className="received">{msg.message}</div></th>                         
                                            <td></td>
                                        </tr> 
                            }
                        })}
                    </tbody>
                </table>
            </div>

            <div className="chatInputBox">
                <Input value={message} onKeyDown={handleEnter} onChange={handleMessage} className="chatInput" />
                <Button onClick={sendMessage} primary> <i className="send icon"></i></Button>
            </div>
        </div>
    )
}

export default Chat