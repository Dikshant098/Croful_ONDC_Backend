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
    },
    cId: {
        type: String
    },
    img:{
        type: String
    }
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart