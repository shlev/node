/* Routing */

// Performing tasks on a particular path is call routing.

const http = require('http');

const routes = {
    '/': function index(req, res) {
        res.writeHead(200);
        res.end('Node Routing');
    },
    '/aboutus': res.end("This is About Page")
}

http.createServer( (req, res) => {
    if ( req.url in routes) {
        return routes[req.url](req,res);
    }
}).listen(process.env.PORT || 8000);