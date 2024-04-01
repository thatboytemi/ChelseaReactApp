import React from "react";
import Header from "./Header";
import GoogleButton from 'react-google-button'


function Login(){
    function handleClick(){
        window.open("http://localhost:5000/login", "_self");
    }
    return(
        <div>
            <Header />
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"200px"}}>
                <div className="login">
                    <GoogleButton onClick={handleClick}/>
                </div>
            </div>
            
        </div>
    ); 
}

export default Login;