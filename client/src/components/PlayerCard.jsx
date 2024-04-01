import React from "react";


function PlayerCard(props){
    return(
        <div>
            <div className="note">
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h1> {props.name} </h1>
                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <p> Date of Birth: {props.dateOfBirth} </p>
                </div> 
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <p>Position: {props.position}</p>
                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <p>Nationality: {props.nationality} </p>
                </div>
            </div>
        </div> 
    );
}

export default PlayerCard;