import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function Home(){
    return (   
        <div className="homeContainer">
            <Sidebar></Sidebar>
            <Chat></Chat>
        </div> 
    )
}

export default Home