//*  Express Form */

const express = require('express');
const app = express();
const cookies = require('cookie-parser');

const PORT = process.env.PORT || 3000;

app.use(cookies());

let users = {
    name: "John",
    age: 28
}
app.get("/", (req,res) => {
    res.send("Cookies Tutorial");
});

app.get("/setuser", (req,res) => {
    res.cookie("userData", users);
    res.send("User Data Added to Cookies");
});

app.get("/getuser", (req,res) => {
    res.send(req.cookies);
    res.send("User Logout successfully");
});

app.get("/logout", (req,res) => {
    res.clearCookie("userData");
});




app.listen(PORT, ()=> { 
    console.log(`Listen to requests on http://localhost:${PORT}`);
})