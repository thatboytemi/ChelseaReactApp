import React from "react";

function MatchCard(props){
    const daysOfWeek =["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const index = props.date.indexOf("T");
    const date = new Date(props.date.substring(0, index));
    const utcTime = new Date(props.date);
    const sastTime = utcTime.toLocaleTimeString(utcTime.getTime(utcTime.getHours +2));
    const day = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    return (
        <div className="note">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={props.homeTeamLogo} alt="Home Team" style={{width:"75px", height:"75px"}} /> 
                <h1 style={{margin:"20px"}}>{props.homeTeam} - {props.awayTeam}</h1>
                <img src={props.awayTeamLogo} alt="Home Team" style={{width:"75px", height:"75px"}} /> 
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={props.tournamentLogo} alt="tournament" style={{width:"75px", height:"70px"}} />
            </div>
            
            <p>Date: {day}, {props.date.substring(index-2, index)} {month}</p>
            <p>Time: {sastTime}</p>
            <p> {props.venue} </p>
            
        </div>
    )
}

export default MatchCard;