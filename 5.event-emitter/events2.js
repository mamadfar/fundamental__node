import { EventEmitter } from "events";

//? addEListener is an alias for "on"
//? removeEListener is an alias for "off"

const emitter = new EventEmitter();

emitter.on("event1", () => {
  //? Arrow function does not have its own 'this'
  console.log("this: ", this);
});
emitter.on("event1", function () {
  //? Regular function has its own 'this'
  console.log("this === emitter: ", this === emitter);
});

emitter.on("event2", () => {
  console.log("event2 happened");
});

emitter.emit("event1");
emitter.emit("event2");

// emitter.removeAllListeners(); //? Remove all listeners for all events
// emitter.removeAllListeners("event1"); //? Remove all listeners for 'event1' only
// emitter.emit("event1"); //? No output, as listeners are removed
// emitter.emit("event2"); //? No output, as listeners are removed

function handler() {
  console.log("event1 happened");
}

emitter.on("event1", handler);
emitter.emit("event1");
emitter.off("event1", handler); //? Remove specific listener
emitter.removeListener("event1", handler); //? Alias for 'off'

emitter.emit("event1"); //? No output, as the specific listener is removed
