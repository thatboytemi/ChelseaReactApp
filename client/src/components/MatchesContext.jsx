import React, {createContext, useState, useEffect} from "react";

export const MatchesContext = createContext();

function MatchContext({children}){
    const [data, setMatchData] = useState({success:null, data:null});
    async function getMatches(){
        const data = await fetch("/matches");
        const parsedData = await data.json();
        if(parsedData.success){
            setMatchData(parsedData.matches);
        }
    }
    useEffect(()=>{
        getMatches();
    }, []);
    return(
        <MatchesContext.Provider value ={{data, setMatchData}}>
            {children}
        </MatchesContext.Provider>
    );
}

export default MatchContext;