import express from 'express'

const app = express();

app.use("/route1", (req, res, next) => {

})

app.use("/", (req, res) => {

})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
