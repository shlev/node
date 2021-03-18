const express = require('express');

const app = express();

app.get("/ping", (req, res) => {
    res.send("Node Express Application");
});


app.listen(3000, ()=> console.log("Server Started on port 3000"));