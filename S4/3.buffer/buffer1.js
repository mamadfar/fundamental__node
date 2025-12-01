import { Buffer } from "buffer";

//? In each byte we can store values from 0 to 255 (2^8 - 1)
//? Buffer is a global object in Node.js, but not in browsers. So, we need to import it from 'buffer' module

let buf1 = Buffer.from("abcd");
console.log(buf1);

buf1 = Buffer.from("abcd", "utf-8"); //? Default is 'utf-8'
console.log(buf1);

buf1 = Buffer.from("abcd", "latin1");
console.log(buf1);

buf1 = Buffer.from("abcd", "ascii");
console.log(buf1);

buf1 = Buffer.from("abcd", "hex");
console.log(buf1);

buf1 = Buffer.from("abcdzzab", "hex");
console.log(buf1);

buf1 = Buffer.from("سلام");
console.log(buf1);

buf1 = Buffer.from("سلام", "ascii"); //? Not supported for non-latin characters
console.log(buf1);

buf1 = Buffer.from([0x20, 30, 40, 50, 60, 256, 316]); //? Values > 255 will be truncated to fit in a byte --- 0x means hexadecimal (base 16) and 0x20 = 32 in decimal (base 10)
console.log(buf1);

let buf2 = Buffer.from(buf1); //? Copy buf1 to buf2 --- This is the only way to copy a buffer
console.log(buf2);
