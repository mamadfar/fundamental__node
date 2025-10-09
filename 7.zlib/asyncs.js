import zlib from "zlib";
import fs from "fs";

let input = fs.readFileSync("./10MB_story.txt");

console.log(`Input length: ${input.length} Bytes`); //? 10MB = 10 * 1024 * 1024 = 10485760 bytes
console.log(`Input length: ${(input.length / 1024 / 1024).toFixed(2)} MB`);

let start, zipped, unzipped, end;

//* ----------------------------- Callback Gzip ---------------------------------
start = Date.now();

zlib.gzip(input, (err, zippedFile) => {
  console.log("----------------------------- Zipped in Callback ---------------------------------");
  if (err) throw new Error(err);
  end = Date.now();
  console.log(`Zipped in Callback length: ${zippedFile.length} Bytes`);
  console.log(`Zipped in Callback length: ${(zippedFile.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Compress time: ${end - start} ms`);
  start = Date.now();
  zlib.gunzip(zippedFile, (err, unzippedFile) => {
    console.log("--------------------------- Unzipped in Callback -------------------------------");
    if (err) throw new Error(err);
    end = Date.now();
    console.log(`Unzipped in Callback length: ${unzippedFile.length} Bytes`);
    console.log(
      `Unzipped in Callback length: ${(unzippedFile.length / 1024 / 1024).toFixed(2)} MB`
    );
    console.log(`Decompress time: ${end - start} ms`);
  });
});

//* ----------------------------- Promised Gzip ---------------------------------

import { promisify } from "util";

const pgzip = promisify(zlib.gzip);
const pgunzip = promisify(zlib.gunzip);

try {
  start = Date.now();
  zipped = await pgzip(input);
  console.log("---------------------------- Zipped with Promises --------------------------------");
  end = Date.now();
  console.log(`Zipped with Promises length: ${zipped.length} Bytes`);
  console.log(`Zipped with Promises length: ${(zipped.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Compress time: ${end - start} ms`);

  start = Date.now();
  unzipped = await pgunzip(zipped);
  console.log("--------------------------- Unzipped with Promises -------------------------------");
  end = Date.now();
  console.log(`Unzipped with Promises length: ${unzipped.length} Bytes`);
  console.log(`Unzipped with Promises length: ${(unzipped.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Decompress time: ${end - start} ms`);
} catch (error) {
  console.log(error);
}
