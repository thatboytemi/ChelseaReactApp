import React, { useContext} from "react";
import Home from "./Home";
import {Routes, Route} from "react-router-dom";
import Matches from "./Matches";
import Players from "./Players";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";
import { AccountContext } from "./UserContext";
function Views(){
    const {user} = useContext(AccountContext);
    console.log(user);
    return(user.loggedIn===null? "" :
        <Routes>
            <Route index element={user.loggedIn===true?<Home />:<Login />} />
            <Route element={<ProtectedRoutes />} >
                <Route path="/matches" element={<Matches />} />
                <Route path="/home" element={<Home />} />
                <Route path="/players" element={<Players />} />
            </Route>
        </Routes>
    )
}
export default Views;