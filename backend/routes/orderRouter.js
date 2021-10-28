import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from './../models/oderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post(
    '/seed',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        if (req.body.orderItems.length === 0) {
            res.status(404).send({ message: "Cart is empty!" });
        } else {
            const order = new Order({
                orderItems: req.body.orderItems,
                shippingAddress: req.body.shippingAddress,
                itemsPrice: req.body.itemsPrice,
                totalPrice: req.body.totalPrice,
                user: req.user._id,
            });
            const createdOrder = await order.save();
            res
                .status(201)
                .send({ message: "new Order Created", order: createdOrder });
        }

    }))

export default orderRouter;