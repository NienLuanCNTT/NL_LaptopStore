import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import data from '../data.js';
import Configs from '../models/configModels.js';

const productRouter = express.Router();

productRouter.get('/',
    expressAsyncHandler(async (req, res) => {
        const products = await Product.find({});    //get all products
        res.send(products);
    })
);


productRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        //fix E11000 duplicate key error collection
        await Product.remove({});
        const createdProducts = await Product.insertMany(data.product);
        res.send({ createdProducts });
    })
);

productRouter.get('/:id',
    expressAsyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.send(product);
        }
        else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

export default productRouter;