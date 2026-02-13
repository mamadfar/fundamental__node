import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.sendFile('./views/home.html', {root: '.' });
});

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: '.' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});