const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

// const server = http.createServer(( req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Welcome to HTTP server");

// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

/* http request */
console.log("***Http Request***")
let data = "";

http.get("http://api.open-notify.org/astros.json", resp => {
    resp.on('data', chunk => {
        data += chunk;
    });

    resp.on('end', () => {
        let jsondata = JSON.parse(data);
        console.log(jsondata);
    })
});

/* POST REQUEST */
const httpPost = require('https');

console.log("***  Post Request  ***");
const dataPost = JSON.stringify({
    name: "John Doe",
    Job: "Content Writer"
});

const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    header: { 'Content-Type': 'application/json'}
}

//request
const req = httpPost.request(options, (res) => {
    let body = "";
    console.log("Status Code:", res.statusCode);

    res.on("data", (chunk)=> {
        body+=chunk;
    })

    res.on('end', ()=> {
        console.log("Body:", JSON.parse(body));
    })
});

req.write(data);
req.end();

const axios = require('axios');

axios.post("https://reqres.in/api/users", data).then(res=> {
    console.log("AXIOS");
    console.log(`Status Code: ${res.status}`);
    console.log(`Body: ${res.data}`)
}).catch(err => {
    console.log(err);
})