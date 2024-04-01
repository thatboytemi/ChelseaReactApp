import React from "react";
import { BrowserRouter } from "react-router-dom";
import Views from "./Views";
import MatchContext from "./MatchesContext";
import PlayersContext from "./PlayersContext";
import UserContext from "./UserContext";


function App(){
    return(
        <BrowserRouter>
            <UserContext>
                <MatchContext>
                    <PlayersContext>
                        <Views />
                    </PlayersContext> 
                </MatchContext>
            </UserContext>
        </BrowserRouter>
    );
}

export default App;

