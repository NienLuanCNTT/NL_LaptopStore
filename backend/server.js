import express from 'express';
import mongoose from 'mongoose';
// import data from './data.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
// import { dirname } from 'path';
const app = express();

// connect mongodb database
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/laptopStore', {
    // từ bản mongoose 6. thì k cần nữa
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
});


import path from 'path';
const __dirname = path.resolve();

app.use(express.static('backend'));
app.use('/images', express.static('images'));


// app.get('/api/products/:id', (req, res) => {
//     const product = data.product.find((x) => x._id === req.params.id);

//     if (!product) {
//         res.status(404).send({ message: 'Product not Found' });
//     }
//     else {
//         res.send(product);
//     }
// });

// app.get('/api/products', (req, res) => {
//     res.send(data.product);
// });

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})