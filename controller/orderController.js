const Order = require("../models/Order");
// const bcrypt = require('bcrypt')

require('dotenv').config()

const createOrder = async (req, res) => {
    const data = req.body

    for (let i = 0; i < data.length; i++) {
        let obj = {
            prodName: data[i].productName,
            price: data[i].price,
            quantity: data[i].quantity,
            userId: data[i].userId,
            img: data[i].img,
            sellerName: data[i].sellerName
        }

        try {
            const data = await Order.create(obj);
            res.send(data)
        } catch (error) {
            console.log(error);
        }
    }


}

const getOrderDetails = async (req, res) => {

    let obj = {
        // productName: req.body.productName,
        // price: req.body.price,
        // quantity: req.body.quantity,
        userId: req.params._id,
    }

    try {
        console.log(obj);
        const data = await Order.find({});
        console.log(data);
        res.send(data)
    } catch (error) {
        // console.log(data);
    }



}



module.exports = {

    createOrder,
    getOrderDetails

}

