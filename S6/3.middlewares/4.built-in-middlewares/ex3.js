import express from "express";

const app = express();

//? The express.json() middleware is used to parse incoming JSON payloads in the request body (we use JSON a lot in REST).
//? It allows you to access the data sent in the request as a JavaScript object through req.body.
//? This is particularly useful when handling POST or PUT requests where the client sends data in JSON format.
app.use(express.json());

app.post("/", (req, res) => {
    res.json(req.body)
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
