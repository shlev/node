const express = require('express');

const app = express();

const router = require('./router');
const port = 3001;

app.use('/api', router)

app.get("/", (req, res) => {
    res.end("Routing App");
})

app.listen(port, ()=> {console.log(`Server is running on http://${port}`)})