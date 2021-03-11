const fs = require('fs');

fs.readFile("test.txt", "utf8", (err, data) => {
    if ( err) throw err;
    console.log(data);
})

const options = { encoding: 'utf-8', flag:'r'};
const data = fs.readFileSync("test.txt", options);

console.log(data);

fs.stat('test.txt', (err, status) => {
    if ( err) {
        console.error(err);
        return;
    }

    console.log(status.isFile());
    console.log(status.isDirectory());
    console.log(status.isSymbolicLink());
    console.log(status.size);
})