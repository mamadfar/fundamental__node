import express from "express";

const app = express();

//? When we have a form in our HTML, we should use the express.urlencoded() middleware to parse the form data and make it available in the req.body object.
//? This middleware will parse the URL-encoded data sent by the form and convert it into a JavaScript object that we can easily access in our route handlers.
//? Also, we should set the extended option to false to use the querystring library for parsing the data, which is more efficient for simple form data.
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`
        <form action="/result-page" method="POST">
            <label>3 + 4 = ?</label>
            <input type="text" name="result" /> <br />
            <button type="submit">Submit</button>
        </form>
        <style>
            * {
                font-size: 24px;
                line-height: 2;
                margin-bottom: 10px;
            }
        </style>
        `);
});

app
  .route("/result-page")
  .post((req, res) => {
    if (req.body.result) {
      if (req.body.result === "7") {
        res.send(`<h1>Congratulations! your answer is correct.</h1>`);
      } else {
        res.send(`<h1>Ooooops! your answer is wrong.</h1>`);
      }
    } else {
        res.status(400)
        res.statusMessage = "Invalid Request"
        res.type('html')
        res.send("<h1>Result is required</h1>");
    }
  })
  .get((req, res) => {
    res.redirect("/");
  });

  //? This middleware will handle all the requests that are not handled by the above routes
app.use("/", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
