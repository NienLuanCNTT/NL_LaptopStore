import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from './../models/oderModel.js';

const orderRouter = express.Router();

orderRouter.get('/:id',
    expressAsyncHandler(async (req, res) => {
        const order = await Order.find({ "userId": req.params.id });
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
    expressAsyncHandler(async (req, res) => {
        if (!req.body.orderItems) {
            res.status(404).send({ message: "Cart is empty!" });
        }
        else {
            const order = new Order({
                orderItems: req.body.orderItems,
                shipingAddress: req.body.shipingAddress,
                totalPrice: req.body.totalPrice,
                status: req.body.status,
                dateTime: req.body.dateTime,
                userId: req.body.userId,
            });
            order.save();
        }
    }))

export default orderRouter;