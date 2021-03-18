/** Middleware */

// req&res
// end cycle
// next()

const express = require('express');

const app = express();

const myLogger = function(req, res, next) {
    console.log("LOGGED");
    next();
}

const requestTime = function (req, res, next) {
    req.reqTime = Date.now();
    next()
}

app.use(myLogger);
app.use(requestTime);

app.get("/", ( req, res)=> {
    res.send(`Current Time: ${req.reqTime} ` );
});

app.listen(3000, () => console.log("App started on PORT 3000"));