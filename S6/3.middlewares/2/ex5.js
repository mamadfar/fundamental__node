import express from 'express'

const app = express();

//? Mathcing /user/123, /user/mamad, etc
app.get("/user/:id", (req, res, next) => {
    console.log("A GET request received to middleware 1");
    console.log(req.params)
    console.log("---------------------------------------------")
    next();
})

//? Matching /user/123/book/456, /user/abc/book/def, etc
app.get("/user/:userId/book/:bookId", (req, res, next) => {
    console.log("A GET request received to middleware 2");
    console.log(req.params)
    console.log("---------------------------------------------")
    next();
})

//? Matching /file/report.pdf, /file/photo.jpg, etc - The ":name" parameter captures the file name, and the ":ext" parameter captures the file extension
app.get("/file/:name.:ext", (req, res, next) => {
    console.log("A GET request received to middleware 3");
    console.log(req.params)
    console.log("---------------------------------------------")
    next();
})

//? Matching /file/2021-01-01-2021-12-31, /file/abc-def, etc
app.get("/file/:from-:to", (req, res, next) => {
    console.log("A GET request received to middleware 4");
    console.log(req.params)
    console.log("---------------------------------------------")
    next();
})

//? Matching /user/123, /user/456, etc - The regex \d{2,5} ensures that the "id" parameter consists of 2 to 5 digits.
//? And <id> is a named capturing group that allows us to access the captured value using req.params.id instead of req.params[0]
app.get(/^\/user\/(?<id>\d{2,5})$/, (req, res, next) => {
    console.log("A GET request received to middleware 5");
    console.log(req.params)
    console.log("---------------------------------------------")
    next();
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});