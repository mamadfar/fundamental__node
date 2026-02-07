import express from 'express'

const app = express();

//? If we use app.use("/route1"), it means /route1 and all its sub-routes will be handled by this middleware.
//? So, if we have a request to /route1 or /route1/subroute, it will be handled by this middleware.
//? If we want to handle only /route1 and not its sub-routes, we can use app.get("/route1") or app.post("/route1") depending on the HTTP method we want to handle.

app.get("/route1", (req, res, next) => {
    console.log("A GET request received to middleware 1");
    next();
})

// app.use("/", (req, res, next) => {
//     console.log("A request received to middleware 2");
//     next();
// })

//? app.all() will handle all HTTP methods for the specified route.
//? So, if we have a request to / with any HTTP method (GET, POST, PUT, DELETE, etc.), it will be handled by this middleware.
//? This is useful when we want to apply some common logic for all requests to a specific route regardless of the HTTP method used.
app.all("/", (req, res, next) => {
    console.log("A request received to middleware 2");
    next();
})

app.get("/", (req, res, next) => {
    console.log("A GET request received to middleware 3");
    next();
})

app.post("/", (req, res, next) => {
    console.log("A POST request received to middleware 4");
    next();
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});