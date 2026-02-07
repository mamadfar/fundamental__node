import express from 'express'

const app = express();

app.use("/route1", (req, res, next) => {
    console.log("Hello from 1st /route1");
    // res.send("Hello from 1st /route1"); //? Last middleware should send res
    next();
})

app.use("/route1", (req, res) => {
    console.log("Hello from 2nd /route1");
    res.send("Hello from 2nd /route1");
})

app.use("/route2", (req, res) => {
    console.log("Hello from 2nd /route2");
    res.send("Hello from 2nd /route2");
})

app.use("/", (req, res) => {
    console.log("Hello from /");
    res.send("Hello from /");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//? We should always call next() either res.send()
//? After calling each next(), the control will be passed to the next middleware in the stack.
//? If we don't call next() or res.send(), the request will hang and eventually time out, as the server will be waiting for a response that never comes.
//? If we have anything after next(), it will be executed after the next middleware is executed. So, we should be careful about the order of middlewares and the placement of next() in our code.