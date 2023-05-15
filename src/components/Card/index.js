import React from "react";
import "./styles/card.css";

export default function Card(props) {

    let noActorImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

    return (
        <>
            <div className="card-container">
                <div className="photo"><img src={props.image || noActorImage} alt={props.name}/></div>
                <div className="character">{props.name}</div>
                <div className="actor">{props.actor}</div>
            </div>
        </>
    )
}