import React from "react";
import { FaYoutube } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

function Top(){
    return(<>
    <div className="Top-main">
        <div className="contents">
            <div className="margin">
            <IoIosMenu  size={45} /> 
            <FaYoutube size={45} color="red"/>
            </div>
            <p>YouTube</p>
        </div>
        <div className="search">
            <input className="input"></input>
            <button className="searc">search</button>
        </div>
        <div className="search">
            <button className="searc"><VscAccount size={13} /> Sign in</button>
        </div>
    </div>
    </>
    )
}

export default Top;