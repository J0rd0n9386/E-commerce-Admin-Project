import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    userId: String,
    company: String,
    imageUrl: String
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);