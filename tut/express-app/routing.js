/** Routing express */


const express = require('express')
const app = express();

const PORT = 3000;

const data = { 
    id: 1,
    name: 'India'
}

app.get("/", (req, res) => {
    res.end("Welcome to my Homepage")
});

app.get("/about", (req, res) => {
    res.send("Welcome to my About page")
})

app.get("/weather", (req, res) => {
    res.sendFile("/index.html"); //error
})

app.listen(PORT, ()=> { console.log(`Server have started on Port: ${PORT}`)})