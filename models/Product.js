const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    color: {
        type: String
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    photo: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
