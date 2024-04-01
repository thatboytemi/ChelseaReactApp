import React,{createContext, useEffect, useState} from "react";

export const PlayerContext = createContext();

function PlayersContext({children}){
    const [playerData, setPlayerData] = useState({data: null, success:null});

    async function getPlayers(){
        const data = await fetch("/players");
        const parsedData = await data.json();
        if(parsedData.success){
            setPlayerData(parsedData.players);
        }
    }

    useEffect(()=>{
        getPlayers();
    }, []);

    return(
        <PlayerContext.Provider value={{playerData, setPlayerData}}>
            {children}
        </PlayerContext.Provider>
    );
}

export default PlayersContext;