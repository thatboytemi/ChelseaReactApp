import React from "react";
import { useContext } from "react";
import { AccountContext } from "./UserContext";
import { Navigate, Outlet } from "react-router";

function ProtectedRoutes(){
    const {user} = useContext(AccountContext);
    return(
        user.loggedIn?<Outlet /> : <Navigate to="/" />
    );
}

export default ProtectedRoutes;