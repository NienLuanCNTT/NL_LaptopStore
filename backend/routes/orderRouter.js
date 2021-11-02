import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from './../models/oderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get('/',
    expressAsyncHandler(async (req, res) => {
        const order = new Order;
        if (order) {
            res.send(order);
        }
        else {
            res.status(404).send({ message: 'order Not Found' });
        }
    })
);

orderRouter.post(
    '/',
    // isAuth,
    expressAsyncHandler(async (req, res) => {
        if (!req.body.orderItems) {
            res.status(404).send({ message: "Cart is empty!" });
            console.log(req.body);
        } else {
            console.log(req.body);
            const order = new Order({
                orderItems: req.body.orderItems,
                shippingAddress: req.body.shippingAddress,
                itemsPrice: req.body.itemsPrice,
                totalPrice: req.body.totalPrice,
                user: req.body.user._id,
            });
            const createdOrder = await order.save();
            res
                .status(201)
                .send({ message: "new Order Created", order: createdOrder });
        }
    }))

export default orderRouter;