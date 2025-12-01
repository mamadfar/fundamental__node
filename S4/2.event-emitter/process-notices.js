console.clear();

import process from "process";
import EventEmitter from "events";

console.log(process instanceof EventEmitter);
console.log(process.constructor.name); //? constructor name can be used on any object or class
// console.log(process); //? The process properties are in an object with the class name - in this case process

console.log(process.cwd());
process.chdir("C:/"); //? Useful to change the current working directory
console.log(process.cwd());

process.env.test = 123;
console.log(process.env.test); //? Always a string
console.log(process.env.Test); //? In Windows env variables are not case insensitive but in Linux they are case sensitive

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("Hello from Sync code");

process.nextTick(() => {
  console.log("nextTick callback");
}); //? nextTick callbacks are executed before any other Async/Callback, even if the timeout is 0
