import mongoose from 'mongoose';

const orderSchma = new mongoose.Schema({
    orderItems: [{
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
    }],
    shipingAddress: {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
    },
    itemsPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
},
    {
        timestamps: true,
    }
);
const Order = mongoose.model('Order', orderSchma);
export default Order;