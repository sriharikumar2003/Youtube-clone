import React from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

function Sidebar(){
return(
    <>
    <div className="container">
        <div className="home">
            < MdHome  size={40}/>
        <p>Home</p>
        </div>
        
        <div className="shorts">
        < SiYoutubeshorts size={40}/>
        <p>Shorts</p>
        </div>
        <div className="subscr">
        <MdSubscriptions size={40}/>
        <p>Subscriptions</p>
        </div>
        <div className="you">
        <MdAccountCircle size={40}/>
        <p>You</p>
        </div>
        <div className="history">
        <FaHistory size={40}/>
        <p>History</p>
        </div>
    </div>
    </>
)
}

export default Sidebar;