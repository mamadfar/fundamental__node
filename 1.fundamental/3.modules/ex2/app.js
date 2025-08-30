// const module = require("./module");
import module, { next, prev, square } from "./module.js";

console.log(next());
console.log(next());
console.log(square());
console.log(prev());
console.log("With Module");
console.log(module.next());
