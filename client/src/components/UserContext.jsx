import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AccountContext = createContext();

function UserContext({children}){
    const [user, setUser] = useState({loggedIn:null});
    const navigate = useNavigate();
    useEffect(()=>{
        async function checkLogin(){
            const data = await fetch("/accounts", {credentials:"include"});
            const parsedData = await data.json();
            setUser(parsedData);
            if(parsedData.loggedIn){
                console.log(parsedData);
                navigate("/home");
            }
            else{
                console.log(parsedData);
            }
        }
        checkLogin();
    }, []);

    return (
        <AccountContext.Provider value={{user:user, setUser:setUser}}>
            {children}
        </AccountContext.Provider>
    );
}

export default UserContext;