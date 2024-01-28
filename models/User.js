const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    mobile: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User