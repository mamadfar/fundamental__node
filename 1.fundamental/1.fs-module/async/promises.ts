const { promises } = require("fs");

// promises
//   .writeFile(`${__dirname}/promiseA.txt`, "Hello World", "utf-8")
//   .then(() => {
//     console.log("Writing then/catch Finish");
//   })
//   .catch((err) => {
//     console.error("Error writing file:", err);
//   });

async function write() {
  try {
    await promises.writeFile(`${__dirname}/promiseB.txt`, "Hello", "utf-8");
    console.log("Writing async/await Finish");
    await promises.appendFile(`${__dirname}/promiseB.txt`, " World", "utf-8");
    console.log("Appending async/await Finish");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

write();

console.log("End of script");
