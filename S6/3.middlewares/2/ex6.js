import express from 'express'

const app = express();

// app.get("/book", (req, res, next) => {
//     res.send("A GET request received to /book");
// })

// app.post("/book", (req, res, next) => {
//     res.send("A POST request received to /book");
// })

// app.put("/book", (req, res, next) => {
//     res.send("A PUT request received to /book");
// })

app.route("/book")
  .get((req, res) => {
    res.send("A GET request received to /book");
  })
  .post((req, res) => {
    res.send("A POST request received to /book");
  })
  .put((req, res) => {
    res.send("A PUT request received to /book");
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});