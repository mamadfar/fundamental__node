// import data from "./data.json" assert { type: "json" };
import { readFile } from "fs/promises";

//? in ESM we can use await without async function
//? ESM modules are asynchronous by default
//? so we can use top-level await
const data = JSON.parse(await readFile("./data.json", "utf-8"));
console.log(data);

const commonJSData = await import("./module.cjs");
console.log(commonJSData.default);
