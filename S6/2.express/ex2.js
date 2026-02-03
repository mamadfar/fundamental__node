import express from 'express'

const app = express();

app.use("/test", (req, res) => {
    console.log('A request received.')
    console.log(req.url, req.method)
    res.send("Hello from /test route")
})

app.use("/", (req, res) => {
    console.log('A request received.')
    console.log(req.url, req.method)
    res.send("Hello from / route")
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});