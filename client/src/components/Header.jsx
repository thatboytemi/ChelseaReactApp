import React from "react";
import Chelsea from "../images/chelsea.png";
import { useNavigate } from "react-router";

function Header(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/");
    }
    return (
    <header>
    <div>
        <button style={{backgroundColor:"transparent", border:"none", display:"flex", marginTop:"10px"}} onClick={handleClick}>
            <img src={Chelsea} alt="Chelsea logo" style={{width:"50px", height:"50px", marginRight:"20px"}}/>
            <h1> Come On Chelsea!</h1>
        </button>
        
    </div> 
    </header>
    );
}

export default Header;