import zlib from "zlib";

//? zlib is a lossless compression library
//? It is used to compress and decompress data
//? It is used in many applications, such as HTTP, PNG, and ZIP
//? It's not like image compression which is lossy compression

let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
culpa qui officia deserunt mollit anim id est laborum. Cras mattis 
consectetur purus sit amet fermentum. Nullam quis risus eget urna 
mollis ornare vel eu leo. Fusce dapibus tellus ac cursus commodo 
tortor mauris condimentum nibh ut fermentum massa justo sit amet risus.`;

console.log(str.length); //? 669 characters means 669 bytes in utf-8 encoding

let zipped = zlib.gzipSync(str);
console.log(zipped.toString()); //? Compressed data will contain non-printable characters, so it will look like gibberish
console.log(zipped);
console.log(zipped.length);
console.log("--------------------------------------------------------------");
let unzipped = zlib.gunzipSync(zipped);
console.log(unzipped.toString());
console.log(unzipped.length);
console.log("--------------------------------------------------------------");
