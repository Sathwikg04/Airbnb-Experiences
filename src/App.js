import React from "react";
import Nav from "./components/nav";
import Content from "./components/content";
import Card from "./components/Card";
import data from "./components/data";
import item from "./components/data";


export default function App(){
    const cards = data.map((items) => {
        return(
            <Card 
              key={items.id}
              item={items}          
            />
        )
    }) 

    return(
        <div>
            <Nav />
            <Content />
            <section className="card--list">{cards}</section>
        </div>
    )
}