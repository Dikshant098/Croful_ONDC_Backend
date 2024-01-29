const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'User'
    }
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart