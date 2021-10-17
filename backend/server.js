import express from 'express';

import data from './data.js';
// import { dirname } from 'path';
const app = express();
import path from 'path';
const __dirname = path.resolve();

app.use(express.static('backend'));
app.use('/images', express.static('images'));

app.get('/api/products', (req, res) => {
    res.send(data.product);
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})