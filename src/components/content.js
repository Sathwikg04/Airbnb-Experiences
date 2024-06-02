import React from "react";
import img from "../images/image-grid.png";

export default function Content(){
    return(
        <section className="content">
            <img src={img} alt="grid" className="content--photo"></img>
            <h1 className="content--header">Online Experiences</h1>
            <p className="content--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home. </p>
        </section>
    )
}