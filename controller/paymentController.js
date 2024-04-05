// const bcrypt = require('bcrypt')
require('dotenv').config()
const Razorpay = require("razorpay");

const createOrder = async (req, res) => {
    const { amount } = req.body

    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        // console.log(instance);
        // return

        const options = {
            amount: amount * 100, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }

}



module.exports = {

    createOrder,

}

