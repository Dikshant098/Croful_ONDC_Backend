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
    }
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart