const Cart = require("../models/Cart");
// const bcrypt = require('bcrypt')
require('dotenv').config()

const addtoCart = async (req, res) => {

    let obj = {
        mobile: req.body.productName,
        price: req.body.price,
        quantity: req.body.quantity,
        userId: req.body.userId,
    }

    // console.log(obj);
    try {
        const data = await Cart.create(obj);
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(data);
    }

}


module.exports = {
    addtoCart
}

