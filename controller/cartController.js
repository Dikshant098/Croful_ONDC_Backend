const Cart = require("../models/Cart");
// const bcrypt = require('bcrypt')
require('dotenv').config()

const addtoCart = async (req, res) => {

    let obj = {
        productName: req.body.productName,
        price: req.body.price,
        quantity: req.body.quantity,
        userId: req.body.userId,
        img: req.body.img,
        cId: req.body.cId
    }

    // console.log(obj);
    try {
        // console.log(obj);
        const data = await Cart.create(obj);
        // console.log(data);
        res.send(data)
    } catch (error) {
        console.log(error);
    }

}

const getCartDetails = async (req, res) => {

    let obj = {
        // productName: req.body.productName,
        // price: req.body.price,
        // quantity: req.body.quantity,
        userId: req.params.userId,
    }

    // console.log(obj);
    try {
        const data = await Cart.find(obj);
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(data);
    }

}
const deleteCartDetails = async (req, res) => {

    let obj = {
        // productName: req.body.productName,
        // price: req.body.price,
        // quantity: req.body.quantity,
        _id: req.params._id,
    }

    // console.log(obj);
    try {
        const data = await Cart.deleteOne(obj);
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(data);
    }

}
const updateCartDetails = async (req, res) => {

    let obj = {
        productName: req.body.productName,
        price: req.body.price,
        quantity: req.body.quantity,
        userId: req.body.userId,
    }

    

    // console.log(obj);
    try {
        const data = await Cart.updateOne({_id: req.prams._id},obj);
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(data);
    }

}



module.exports = {
    addtoCart,
    getCartDetails,
    deleteCartDetails,
    updateCartDetails
}

