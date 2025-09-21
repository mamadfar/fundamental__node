import Finder from "./finder.js";

// const finder = new Finder(/const /g);
const finder = new Finder(/emit\(/g);

//? Way1
// finder.addFiles("events1.js");
// finder.addFiles(["events2.js", "events3.js", "events4.js"]);

// finder.on("match", (file, match) => {
//   console.log(`Found "${match}" in file "${file}"`);
// });
// finder.on("error", (error) => {
//   console.error("Error reading file:", error.message);
// });

finder.find();

//? Way2 - Chaining
finder
  .addFiles("events1.js")
  .addFiles(["events2.js", "events3.js", "events4.js"])
  .on("match", (file, match) => {
    console.log(`Found "${match}" in file "${file}"`);
  })
  .on("error", (error) => {
    console.error("Error reading file:", error.message);
  })
  .find();
//? Note: In real-world scenarios, prefer async file operations to avoid blocking the event loop.
