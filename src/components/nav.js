import React from "react";
import logo from "../images/airbnb-logo.png";

export default function Nav(){
    return(
        <nav>
            <img src={logo} alt="logo" className="Nav--logo"></img>
        </nav>
    )
} 