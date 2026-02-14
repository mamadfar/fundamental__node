import express from 'express';

const app = express()

//? Set a global value using app.set() method -- we can access this value in any route handler using app.get() method
//? Or we can also access this value using req.app.get() or res.app.get() in the route handler
app.set('a', 50);

app.get('/', (req, res) => {
    const value = app.get('a');
    console.log(req.app.get('a'))
    console.log(res.app.get('a'))
    res.send(`The value of 'a' is: ${value}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});