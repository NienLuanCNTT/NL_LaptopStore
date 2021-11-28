import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from './../models/oderModel.js';

const orderRouter = express.Router();

orderRouter.get('/:id',
    expressAsyncHandler(async (req, res) => {
        const order = await Order.find({ "_id": req.params.id });
        res.send(order);
    })
);

orderRouter.get('/',
    expressAsyncHandler(async (req, res) => {
        const orders = await Order.find({});
        res.send(orders);
    })
);

orderRouter.get('/user/:id',
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
    '/add',
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
                dateReceived: req.body.dateReceived,
                userId: req.body.userId,
            });
            order.save();
        }
    }));

orderRouter.post(
    '/status',
    expressAsyncHandler(async (req, res) => {
        await Order.updateOne({ _id: req.body.id },
            { $set: { status: req.body.status } });

    })
);

export default orderRouter;