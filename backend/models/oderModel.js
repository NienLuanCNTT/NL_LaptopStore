import mongoose from 'mongoose';

const orderSchma = new mongoose.Schema({
    orderItems: [{
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
    }],
    shipingAddress: {
        fullName: { type: String, required: true },
        phone: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        commune: { type: String, required: true },
        address: { type: String, required: true },
    },
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true },
    dateTime: { type: String, required: true },
    dateUpdate: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
},
    {
        timestamps: true,
    }
);
const Order = mongoose.model('Order', orderSchma);
export default Order;