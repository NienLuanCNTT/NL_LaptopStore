import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema(
    {
        display: { type: String, required: true, unique: true },
        start_price: { type: Number, required: true },
        end_price: { type: Number, required: true },
    },
    {
        timestamps: true
    }
);

const Price = mongoose.model('Price', priceSchema);

export default Price;