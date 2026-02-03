import express from 'express'

const app = express();

app.use((req, res) => {
    console.log('A request received.')
    res.send('Hello, Express!');
    console.log(req.url, req.method)
    res.end()
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});