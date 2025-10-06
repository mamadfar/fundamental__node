let buf1 = Buffer.alloc(8); //? Allocate 8 bytes (initialized with 0)
console.log(buf1);

buf1 = Buffer.alloc(8, 0x22); //? Allocate 8 bytes and fill with 0x22 (34 in decimal)
console.log(buf1);

buf1 = Buffer.alloc(8, "abc"); //? Allocate 8 bytes and fill with 'abc' (repeated as necessary)
console.log(buf1);

buf1 = Buffer.alloc(8, "abc", "hex"); //? Each pair of hex digits represents a byte so it will fill only with 'ab' because 'c' is left alone
console.log(buf1);

let buf2 = Buffer.alloc(5, buf1); //? Fill buf2 with contents of buf1 (only first 5 bytes)
console.log(buf2);

buf2 = Buffer.alloc(15, buf1); //? Fill buf2 with contents of buf1 (repeated as necessary)
console.log(buf2);

buf2 = Buffer.alloc(10, "Node.js"); //? Buffer length can't be changed after creation, in this case we will create another buffer and save it in buf2
console.log(buf2);

console.log(buf2.toString()); //? Convert buffer to string (default is 'utf-8')

//? utf-8 is from 0 to 11111111 (0 to 127) --- 1 byte
//? ascii is from 0 to 255 (0 to 255) --- 1 byte
//? latin1 is from 0 to 11111111 (0 to 255) --- 1 byte
//? hex is from 0 to 11111111 (0 to 255) --- 1 byte
//? utf-16le is from 0 to 1111111111111111 (0 to 65535) --- 2 bytes
//? ucs2 is from 0 to 1111111111111111 (0 to 65535) --- 2 bytes
//? base64 is from 0 to 11111111 (0 to 255) --- 1 byte

console.log(buf1.toString());
console.log(buf1.toString("ascii"));
console.log(buf1.toString("hex"));

console.log(buf2.toString("hex"));
console.log(buf2.toString("ascii"));

console.log(buf2.toJSON()); //? Convert buffer to JSON object
