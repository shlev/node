const fs = require('fs');

const content = ({ 
    type: "Node Application"
});

fs.writeFileSync("test.json", JSON.stringify(content));

fs.unlink('test.json', err => {
    if ( err) {
        console.log(err)
        return
    }

    console.log("File Removed")
})