

/**  Event Module */

const events = require('events');

let ev = new events.EventEmitter();

ev.on('my_event', function(data) {
    console.log("Event:", data);
});

ev.emit("my_event", "Call emit() method to file my_event");

ev.once("eventOnce", () => console.log("EventOnce once fired"));

ev.emit("eventOnce");
ev.emit("eventOnce");

c1 = (code, msg) => console.log(`Got ${code} and ${msg}`);
ev.on("multi", c1);
ev.emit("multi", 200, 'ok');

ev.off("multi", c1);
ev.emit("multi");
