import path from 'path'
import {fileURLToPath} from 'url'

import express from "express";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: false }));

//? The express.static() middleware is used to serve static files such as HTML, CSS, JavaScript, images, etc. from a specified directory.
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public2")));

app.get("/", (req, res) => {
  res.send(`
        <link rel="stylesheet" href="css/styles.css" />
        <form action="/result-page" method="POST">
            <label>3 + 4 = ?</label>
            <input type="text" name="result" /> <br />
            <button type="submit">Submit</button>
        </form>
        `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
