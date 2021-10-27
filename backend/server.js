import express from 'express';
import mongoose from 'mongoose';
// import data from './data.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
// import categoryRouter from './routes/categoryRouter.js';
// import priceRouter from './routes/priceRouter.js';
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




app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
// app.use('/api/category', categoryRouter);
// app.use('/api/price', priceRouter);

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