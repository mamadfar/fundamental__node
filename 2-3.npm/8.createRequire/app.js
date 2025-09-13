import { createRequire } from "module";

const require = createRequire(import.meta.url);

const data = require("./data.json");
console.log(data);
console.log("---");
console.log(import.meta.filename);
// console.log(__filename);
console.log("---");
console.log(import.meta.dirname);
// console.log(__dirname);
console.log("---");
console.log(import.meta.url);
