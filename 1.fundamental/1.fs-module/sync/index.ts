const fs = require("fs");

// try {
//   if (!fs.existsSync(`${__dirname}/a.txt`)) {
//     fs.writeFileSync(`${__dirname}/a.txt`, "Hello World");
//   } else {
//     fs.appendFileSync(`${__dirname}/a.txt`, "\nHello Again");
//   }
// } catch (error) {
//   console.error("Error handling file:", error.message);
// }
// try {
//   const msg = fs.readFileSync(`${__dirname}/b.txt`, "utf-8");
// } catch (error) {
//   console.error("Error reading file:", error.message);
// }
// console.log("rest of the code");

fs.copyFileSync(`${__dirname}/a.txt`, `${__dirname}/copyA.txt`);

fs.renameSync(`${__dirname}/copyA.txt`, `${__dirname}/renamedA.txt`);

fs.unlinkSync(`${__dirname}/renamedA.txt`);

console.log(fs.statSync(`${__dirname}/a.txt`));

console.log(fs.existsSync(`${__dirname}/a.txt`));

// fs.mkdirSync(`${__dirname}/newDir`);

fs.mkdirSync(`${__dirname}/a/b/c`, { recursive: true });
