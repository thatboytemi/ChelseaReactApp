import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router";
import Stamford from "../images/stamfordBridge.webp";
import Prem from "../images/prem.png";
import FA from "../images/fa.png";
import Champs from "../images/champs.png";


function Home(){
    const navigate = useNavigate();
    
    async function getMatches(){
        navigate("/matches");
    }
    async function getPlayers(){
        navigate("/players");
    }
    return(
        <div>
            <Header />
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={Stamford} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Chelsea F.C.</h1>
                        <p class="lead">Chelsea Football Club is an English professional football club based in Fulham, West London. Founded in 1905, the team play their home games at Stamford Bridge. The club competes in the Premier League, the top division of English football. It won its first major honour, the League championship, in 1955.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="submit" class="btn btn-primary btn-lg px-4 me-md-2" onClick={getMatches}>Get Upcoming Fixtures</button>
                            <button type="submit" class="btn btn-outline-secondary btn-lg px-4" onClick={getPlayers}>Get Squad List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div>
                    <img src={Prem} style={{height:"300px", marginRight:"100px"}} alt="Premier League"/>
                    <p>6 Premier League wins</p>
                </div>
                <div>
                    <img src={Champs} style={{height:"300px", marginRight:"100px"}} alt="Champions League"/>
                    <p>2 Champions League wins</p>
                </div>
                <div>
                    <img src={FA} style={{height:"300px"}} alt="FA Cup"/>
                    <p>8 FA Cup Wins</p>
                </div>
                
            </div>
        </div>
    );
}

export default Home;