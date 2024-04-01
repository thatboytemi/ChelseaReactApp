import React, { useContext } from "react";
import { PlayerContext } from "./PlayersContext";
import PlayerCard from "./PlayerCard";
import Header from "./Header";

function Players(){
    const {playerData} = useContext(PlayerContext);
    try{
        return(
            <div>
                <Header />
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div>
                        {playerData.map((item, i)=>{
                            return <PlayerCard name={item.name} dateOfBirth={item.dateOfBirth} nationality={item.nationality} position={item.position} key={i}/>;
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


export default Players;