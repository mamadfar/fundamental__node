import path from 'path'
import {fileURLToPath} from 'url'

import express from 'express';

const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const data = ['Apple', 'Orange', 'Banana', 'Grapes']
    const n = 20;
    res.render('home', { data, n })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});