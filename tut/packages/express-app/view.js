/** Views */

const express = require('express');
const app = express();

const PORT = 3000;

app.set("view engine", "pug");

app.get("/", function(req, res) {
    res.render("index", 
    { 
        title: 'Express View Engine Pug',
        h1: 'Express Application'
    });
}
).listen(PORT, ()=> {console.log(`server started on ${PORT} port`)});