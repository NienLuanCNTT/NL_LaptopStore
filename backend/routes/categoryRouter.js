import express from 'express';
import data from '../data.js';
import Category from '../models/categoryModel.js';
import expressAsyncHandler from 'express-async-handler';

const categoryRouter = express.Router();


categoryRouter.get('/',
    expressAsyncHandler(async (req, res) => {
        const category = await Category.find({});
        res.send(category);
    })
);

categoryRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await Category.remove({});
    const createdCategory = await Category.insertMany(data.category);
    res.send({ createdCategory });
}));

export default categoryRouter;