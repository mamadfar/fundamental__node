const fs = require("fs");

fs.writeFile(`${__dirname}/callbackA.txt`, "Hello World", "utf-8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("Writing Finish");
  }
});

console.log("Writing file...");

fs.readFile(`${__dirname}/callbackA.txt`, "utf-8", (err, data) => {
  console.log("Reading Finish");
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents:", data);
  }
});

console.log("Reading file...");
