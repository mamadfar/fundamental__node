import dotenv from 'dotenv'
// import "dotenv/config" //? Alternative way to load .env file

dotenv.config()

console.log(process.env.NUMBER)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.FULLNAME)
console.log(process.env.COURSE)
console.log(process.env.TEST1)
console.log(process.env.TEST2)
console.log(process.env.MULTILINE1)
console.log(process.env.MULTILINE2)
console.log(process.env.MULTILINE3)