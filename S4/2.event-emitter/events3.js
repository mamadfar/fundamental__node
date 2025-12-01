import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("event1", () => {
  console.log("event1 happened");
});

emitter.on("event2", () => {
  console.log("event2 happened");
});

emitter.on("event3", () => {
  console.log("event3 happened");
});

console.log(emitter.listenerCount("event1"));
console.log(emitter.eventNames());
console.log(emitter.getMaxListeners());
emitter.setMaxListeners(2); //? Default is 10 - If more listeners are added, a warning is shown and complains of a memory leak
console.log(emitter.getMaxListeners());
emitter.on("event1", () => {
  console.log("event1 happened");
});
console.log(emitter.listenerCount("event1"));

//? Listening to warnings emitted by EventEmitter and exiting with code 3 (UNUSED)
process.on("warning", (warning) => {
  process.exit(3);
});

emitter.on("event1", () => {
  console.log("event1 happened");
});
console.log(emitter.listeners("event1"));

emitter.emit("event1");

emitter.prependListener("event1", () => {
  console.log("Prepended listener for event1");
});
emitter.prependOnceListener("event1", () => {
  console.log("Prepended once listener for event1");
});
emitter.emit("event1");
emitter.emit("event2");
emitter.emit("event3");
