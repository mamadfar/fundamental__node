import express from 'express'

const app = express();

//? req and res are unique and any changes to them in one middleware will be reflected in the next middleware.
//? So, we can use middlewares to modify the request and response objects as needed.
//? For example, we can add a custom header to the response object in one middleware and it will be available in the next middleware.

const logger = (req, res, next) => {
  const startTime = Date.now();
  next();
  const duration = Date.now() - startTime;
  console.log(`Request duration: ${duration}ms`)
}

const addHeader = (req, res, next) => {
  res.setHeader("X-Custom-Header", "Hello from custom header");
  next();
}

//? This middleware will log the duration of each request. It will be executed for every request that comes to the server, regardless of the route or method.
app.use(logger);
app.use(addHeader);

app.use("/route1", (req, res, next) => {
  const array = [];
  for (let i = 0; i < 10000; i++) {
    array.unshift(i);
  }
  res.send(array)
})

app.use("/", (req, res) => {
    const array = [];
  for (let i = 0; i < 10000; i++) {
    array.unshift(i);
  }
  res.send(array)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
