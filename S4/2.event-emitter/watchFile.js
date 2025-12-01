import fs from "fs";
import { EventEmitter } from "events";

//? It's not a good idea to use fs.watchFile in production because it uses polling to check for file changes which is not efficient
//? fs.watch is a better alternative but it's not supported in all platforms
const watch = fs.watchFile("watchFile-test/test1.txt", { interval: 100 }, (curr, prev) => {
  //   console.clear();
  //   console.log(curr);
  //   console.log(prev);
});

console.log(watch instanceof EventEmitter);
console.log(watch.eventNames());

watch.on("change", (curr, prev) => {
  console.clear();
  console.log(curr);
  console.log(prev);
});
