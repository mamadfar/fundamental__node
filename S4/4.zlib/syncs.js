import zlib from "zlib";
import fs from "fs";

let start = Date.now();

//? If we don't need to see the content of the file, we can directly read it as a buffer
//? This is much faster than reading it as a string (utf-8 encoding)
//? Because reading as a string requires encoding and decoding

//! Attention
//? These methods are useful for files under 2GB
//? For files larger than 2GB, we need to use streams to compress and decompress them
//? Because these methods load the entire file into memory, which can cause memory overflow
//? Streams process the file in chunks, which is more memory efficient

let input = fs.readFileSync("./10MB_story.txt"); //* 50ms
// let input = fs.readFileSync("./The.Naked.Gun.2025.2160p.HDR10Plus.DV.WEB-DL.6CH.x265-PSA.SoftSub.DigiMoviez.mkv"); //* File size:2,242,509 MB ❌
// let input = fs.readFileSync("./Nobody.2021.1080p.10bit.BluRay.8CH.x265.SoftSub.DigiMoviez.mkv"); //* File size: 1,922,997 MB ✔️
// let input = fs.readFileSync("./10MB_story.txt", 'utf-8'); //* 400ms
console.log(Date.now() - start);

console.log(`Input length: ${input.length} Bytes`); //? 10MB = 10 * 1024 * 1024 = 10485760 bytes
console.log(`Input length: ${(input.length / 1024 / 1024).toFixed(2)} MB`);

//? Usually for text files (like HTML, CSS, JS, JSON, XML, etc.), from web servers, we use Gzip or Deflate because they are fast
//? For fonts (like WOFF2, WOFF) on servers, we use Brotli because it gives better compression ratio but is slower
//? Usually, when we wanna compress something for one time and decompress it multiple times, we use Brotli
//? Usually, when we wanna compress and decompress something multiple times, we use Gzip or Deflate

console.log("----------------------------- Zipped Gzip ---------------------------------");
let zipped, unzipped, end;

start = Date.now();
zipped = zlib.gzipSync(input);
end = Date.now();
console.log(`Zipped with Gzip length: ${zipped.length} Bytes`);
console.log(`Zipped with Gzip length: ${(zipped.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`Compress time: ${end - start} ms`); //? Around 40ms
console.log("----------------------------- Unzipped Gzip ---------------------------------");
start = Date.now();
unzipped = zlib.gunzipSync(zipped);
end = Date.now();
console.log(`Unzipped length: ${unzipped.length} Bytes`);
console.log(`Unzipped length: ${(unzipped.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`Decompress time: ${end - start} ms`); //? Around 20ms
fs.writeFileSync("./unzipped.txt", unzipped);

console.log("----------------------------- Zipped Deflate ---------------------------------");
start = Date.now();
zipped = zlib.deflateSync(input);
end = Date.now();
console.log(`Zipped with Deflate length: ${zipped.length} Bytes`);
console.log(`Zipped with Deflate length: ${(zipped.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`Compress time: ${end - start} ms`); //? Around 40ms

fs.writeFileSync("./zipped.gz", zipped);
console.log("----------------------------- Unzipped Deflate ---------------------------------");
start = Date.now();
unzipped = zlib.inflateSync(zipped);
end = Date.now();
console.log(`Unzipped with Deflate length: ${unzipped.length} Bytes`);
console.log(`Unzipped with Deflate length: ${(unzipped.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`Decompress time: ${end - start} ms`); //? Around 20ms
console.log("--------------------------------------------------------------");

console.log("----------------------------- Zipped Brotli ---------------------------------");
start = Date.now();
zipped = zlib.brotliCompressSync(input);
end = Date.now();
console.log(`Zipped with Brotli length: ${zipped.length} Bytes`);
console.log(`Zipped with Brotli length: ${(zipped.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`Compress time: ${end - start} ms`); //? Around 40ms

fs.writeFileSync("./zipped.gz", zipped);
console.log("----------------------------- Unzipped Brotli ---------------------------------");
start = Date.now();
unzipped = zlib.brotliDecompressSync(zipped);
end = Date.now();
console.log(`Unzipped with Brotli length: ${unzipped.length} Bytes`);
console.log(`Unzipped with Brotli length: ${(unzipped.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`Decompress time: ${end - start} ms`); //? Around 20ms
