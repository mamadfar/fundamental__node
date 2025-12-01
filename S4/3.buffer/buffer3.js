let buf1 = Buffer.alloc(10, "a");
let buf2 = Buffer.from("Hello");

console.log(buf2.length);
console.log(buf1.length);

console.log(Buffer.byteLength(buf1));
console.log(Buffer.compare(buf1, buf2)); //? If buf1 < buf2 => -1, If buf1 == buf2 => 0, If buf1 > buf2 => 1

let buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());

buf1.fill("c");
console.log(buf1.toString());

console.log(buf1.includes("cc"));
console.log(buf1.includes("97"));

console.log(Buffer.isBuffer(buf1));
console.log(buf1 instanceof Buffer);
console.log(Buffer.isBuffer({}));

console.log(buf1);
console.log(buf1[1]);
buf1[1] = 55;
console.log(buf1);
buf1[2] = "7"; //? Convert to number
buf1[3] = "a"; //? Invalid, so it will be 0
console.log(buf1);
buf1[13] = 100; //? Ignored, because index is out of range
console.log(buf1);

buf1.write("Hi!"); //? Start writing from index 0 and override existing values --- only first 3 bytes will be written
console.log(buf1.toString());

buf1.write("Hello World", 5); //? Start writing from index 5 and override existing values --- only first 5 bytes will be written
console.log(buf1.toString());

buf1.write("Hello World");
console.log(buf1.toString());

buf1.copy(buf3, 3, 0, 5); //? Copy first 5 bytes of buf1 to buf3 starting from index 3 of buf3
console.log(buf3.toString());

buf1.copy(buf3); //? Copy all bytes of buf1 to buf3 starting from index 0 of buf3
console.log(buf3.toString());

buf1.copy(buf3, 2, 1, 3); //? Copy bytes from index 1 to 3 (3 not included) of buf1 to buf3 starting from index 2 of buf3
console.log(buf3.toString());
