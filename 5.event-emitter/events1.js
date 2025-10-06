import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("event1", (...args) => {
  console.log("event1 happened", args);
});

emitter.on("event1", (args) => {
  console.log("Another listener for event1", args);
});

emitter.addListener("event2", (args) => {
  console.log("event2 happened - 1", args);
});

emitter.on("event2", (arg1, arg2) => {
  console.log("event2 happened - 2", arg1, arg2);
});

emitter.emit("event1", { key: "value" });
emitter.emit("event2", [1, 2, 3]);
emitter.emit("event2", "a", "b");
emitter.once("event3", (arg) => {
  console.log("event3 happened", arg);
});
emitter.emit("event3", 42);
emitter.emit("event3", 43); //? This will not trigger the listener

//? If no listeners are attached for 'error', Node.js will throw an error and crash
emitter.on("error", (err) => {
  console.error("Error event:", err.message);
});
