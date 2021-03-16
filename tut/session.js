//*  Express Form */

const express = require('express');


const path = require('path');
const app = express();
const session = require('express-session');

const PORT = process.env.PORT || 3000;

// app.set("views", path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(session({
    secret:"Your Secret Key",
    resave: true, 
    saveUninitialized: true
}));

app.get("/", (req,res) => {
    req.session.name = "John";
    return res.send("Session Set");
})

app.get("/session", (req,res) => {
    let name = req.session.name;
    return res.send(name);
})

app.get("/destroy", (req,res) => {
    req.session.destroy (function(error) {
         console.log("Session Destroyed");
    });
    res.end();
})




// app.post("/form_submit", (req,res) => {
//   const username = req.body.username;
//   const email = req.body.email;
//   res.end(`Your username is ${username} and email is ${email}`) 
// })



app.listen(PORT, ()=> { 
    console.log(`Listen to requests on http://localhost:${PORT}`);
})