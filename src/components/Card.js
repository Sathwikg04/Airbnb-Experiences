import React from "react";
import star from "../images/Star.png";

export default function Card(props){
    let badgeText
    if(props.item.openSpots ===0){
        badgeText = "SOLD OUT"
    }else if(props.item.location ==="Online"){
        badgeText="ONLINE"
    }
    return(
        <div className="card">
            {
            badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.img} alt="img" className="card--img" height={200}/>
            <div className="card--stats">
                <img src={star} className="card--star" alt="star"></img>
                <span>{props.item.stats.ratings}</span>
                <span className="gray">({props.item.stats.reviewCount}) .  </span>
                <span className="gray"> {props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> /person</p>
        </div>
    )
}