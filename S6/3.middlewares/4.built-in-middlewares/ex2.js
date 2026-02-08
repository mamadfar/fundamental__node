import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log(req.query)
    // res.send(req.query);
    //? Always use res.json() when we wanna send something to the client that is not a string or an HTML,
    //? because res.json() will set the correct Content-Type header for us and also it will convert our data to JSON format if it's not already in JSON format.
    res.json(req.query);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
