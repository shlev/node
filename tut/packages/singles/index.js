const getMessage = (msg, callback) => {
    setTimeout(()=> {
        console.log(msg);
        callback();
    }, 1000);
};

const displayMessage = () => {
    console.log("Display Message");
}
// getMessage("Get Message", displayMessage);

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Run Before"), 1000);
});



function GetAfter() {
    console.log("Print After");
}

async function run() {
    await promise.then(
    result => console.log(result), 
    error => console.log(error)
    );

    GetAfter();
}


run();

