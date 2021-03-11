/** Streams */

//memory efficiency
//time efficiency

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const stream = fs.createReadStream("test.txt");
    stream.pipe(res);
})


server.listen(3000, ()=> console.log("Application Started on PORT 3000"));

