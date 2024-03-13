const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    mobile: {
        type: Number
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }

})

const User = mongoose.model('User', userSchema)
module.exports = User