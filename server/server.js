import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import passport from "passport";
import {Strategy} from "passport-google-oauth20";
import pg from "pg";
import session from "express-session";
import { configDotenv } from "dotenv";

configDotenv();


const app = express();
const clientURL = process.env.CLIENT_URL;
const apiToken = process.env.FOOT_API_KEY;

const db = new pg.Client({
  user:   process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

app.use(session({secret:process.env.SESSION_KEY}));

await db.connect();

const port = 5000;

const team =61;
const googleClientId = process.env.GOOGLE_CLIENT_ID ;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET ;
const callBackURL = process.env.GOOGLE_CALLBACK_URL;

app.use(passport.initialize());
app.use(passport.session());

function isAuth(req, res, next){
  if (req.isAuthenticated()){
    next();
  }
  else{
    res.json({loggedIn:false});
  }
}

passport.use(new Strategy({
  clientID:googleClientId,
  clientSecret:googleClientSecret,
  callbackURL:callBackURL
}, async (accessToken, refreshToken, profile, done)=>{
  const account = profile._json;
  let user ={};
  try{
    const data = await db.query("SELECT * FROM users WHERE username=$1;", [account.sub]);
    if(data.rows.length===0){
      const rawData = await db.query("INSERT INTO users (username, name) VALUES ($1, $2) RETURNING id;", [account.sub, account.name]);
      user = {id:rawData.rows[0].id};
    }
    else{
      user={id:data.rows[0].id};
    }
    done(null,{...user, name: account.name, username:account.sub});
  }
  catch(err){
    done(err);
  }

}));

passport.serializeUser((user, done)=>{
  done(null, user);
});

passport.deserializeUser((user, done)=>{
  done(null, user);
});

app.get("/players", async (req, res)=>{
  const options = {
    method: 'GET',
    url: `https://api.football-data.org/v4/teams/${team}`,
    headers: {
        "X-Auth-Token": apiToken
    }
  };
  try{
    const response = await axios.request(options);
    const parsedData = response.data.squad.map((item)=>{
      return {name: item.name, dateOfBirth:item.dateOfBirth, nationality: item.nationality, position: item.position};
    });
    res.json({players:parsedData, success:true});
  }
  catch(err){
    res.json({success:false});
  }
});

app.get("/accounts", isAuth, (req, res)=>{
  res.json({...req.user, loggedIn:true});
});


app.get("/matches", async (req, res)=>{
      const options = {
        method: 'GET',
        url: `https://api.football-data.org/v4/teams/${team}/matches?status=SCHEDULED`,
        headers: {
            "X-Auth-Token": apiToken
        }
      };
      try{
        const response = await axios.request(options);
        const parsedData = response.data.matches.map((item)=>{
          return {homeTeam: item.homeTeam.name, homeTeamLogo: item.homeTeam.crest, awayTeam: item.awayTeam.name, awayTeamLogo: item.awayTeam.crest, tournament: item.competition.name, date: item.utcDate, tournamentLogo: item.competition.emblem};
        });
        res.json({matches:parsedData, success:true});
      }
      catch(err){
        res.json({success:false});
        console.log(err);
      }
});

app.get("/login", passport.authenticate("google", {
  scope:"profile"
}));

app.get("/auth/google/callback", passport.authenticate("google", {
  session:true
}), (req, res)=>{
  res.redirect(`${clientURL}`)
}
)


  

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})



