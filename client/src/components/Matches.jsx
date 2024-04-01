import React, { useContext } from "react";
import { MatchesContext } from "./MatchesContext";
import Header from "./Header";
import MatchCard from "./MatchCard";

function Matches(){
    const {data} = useContext(MatchesContext);
    try{
        return(
            <div>
                <Header />
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div>
                        {data.map((item, i)=>{
                            return <MatchCard homeTeam={item.homeTeam} awayTeam={item.awayTeam} tournament={item.tournament} homeTeamLogo = {item.homeTeamLogo} awayTeamLogo= {item.awayTeamLogo} date={item.date} venue={item.venue} tournamentLogo={item.tournamentLogo} key={i}/>
                        })}
                    </div>
                </div>
                
            </div>  
    );
    }
    catch(err){
        return(
            <div className="note"> 
                <h1>
                    Too many requests. Please try again in 1 minute.
                </h1>
            </div>
        );
    }
}

export default Matches;