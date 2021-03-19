const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const route = require('./router');
const port = 3001;

app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', route)

app.get("/", (req, res) => {
    res.end("Routing App");
})

app.listen(port, ()=> {console.log(`Server is running on http://${port}`)})