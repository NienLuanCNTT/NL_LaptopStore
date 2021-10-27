import express from 'express';
import data from '../data.js';
import Price from '../models/priceModel.js';
import expressAsyncHandler from 'express-async-handler';

const priceRouter = express.Router();

priceRouter.get('/',
    expressAsyncHandler(async (req, res) => {
        const price = await Price.find({});    //get all price
        res.send(price);
    })
);

priceRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await Price.remove({});
    const createdPrice = await Price.insertMany(data.price);
    res.send({ createdPrice });
}));

export default priceRouter;