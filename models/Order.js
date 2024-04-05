const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    prodName: {
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
    sellerName: {
        type: String
    },
    img: {
        type: String
    },

})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order