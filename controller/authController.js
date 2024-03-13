const User = require("../models/User");
// const bcrypt = require('bcrypt')
require('dotenv').config()

const createUser = async (req, res) => {

    // let password = await bcrypt.hash(req.body.password, bcrypt.genSaltSync(8));

    // let createUser = {
    //     // username: req.body.username,
    //     phone: req.body.phone,
    //     password: password,
    //     // phone: req.body.phone
    // }

    // console.log(req.body);
    // const findUsername = await User.findOne({ username: req.body.username })
    // if (!findUsername) {
    //     const findEmail = await User.findOne({ email: req.body.email })
    //     if (!findEmail) {
    //         const data = await User.create(createUser);
    //         res.status(200).json(data);
    //         return
    //     } else {
    //         res.send({
    //             msg: "Email already exist"
    //         })
    //         return
    //     }
    // }
    // else {
    //     res.send({
    //         msg: "username already exist"
    //     })
    //     return
    // }

    let obj = {
        mobile: req.body.mobile,
    }

    // console.log(obj);
    try {
        const user = await User.findOne()
        const data = await User.create(obj);
        res.send(data)

    } catch (error) {
        console.log(data);
    }

}

const generateRandomOTP = () => {
    const min = 1000
    const max = 9999
    let rand = Math.random()
    rand = Math.floor(rand * max - min)
    return rand;
}

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
var sendOTP = 0;
var resp = null
var phone = null
const userLogin = async (req, res) => {
    const { mobile } = req.body
    phone = mobile
    // console.log(mobile);
    sendOTP = generateRandomOTP()

    try {
        const message = await client.messages
            .create({
                body: `Your is Test msg for OTP. Your OTP is ${sendOTP}`,
                from: process.env.TWILIO_PHONE_NO,
                to: `+91${mobile}`
            })
        if (message) {
            res.send({
                success: true,
                message: "Otp successfully send to user",
            })
        }

    } catch (error) {
        res.send(error)
    }
}


const verifyUser = async (req, res) => {
    const { userOTP } = req.body

    try {
        if (sendOTP === parseInt(userOTP)) {
            resp = await User.findOne({ mobile: phone })
            if (resp) {
                console.log(resp);
                console.log("Already exist----------------------------------------------------->");
                res.status(200).json({
                    _id: resp._id,
                    success: true,
                    message: "User login successfully done !!"
                })
                sendOTP = null
            } else {
                resp = await User.create({ mobile: phone })
                console.log("not notttyytytytyytytytyytytytyytuuuuuuuuuuuuuuuuuuuu");
                res.status(200).json({
                    _id: resp._id,
                    success: true,
                    message: "User login successfully done !!"
                })
                sendOTP = null
            }
            resp = null
            phone = null

        }
        else {
            res.status(403).json({
                success: false,
                message: "Invalid Otp. Please resend your Otp to validate."
            })
        }

    } catch (error) {
        console.log(error);

    }



}

const getUserDetailsById = async (req, res) => {
    let id = "6425222ba89117f5a00c58da"
    const data = await User.findById(id)
    console.log("data.password", data.password)
    let myPassword = "harshu@1234"
    let password = await bcrypt.compare(myPassword, data.password)
    console.log(password);
    res.status(200).json(data);
}

const getAllUserDetails = async (req, res) => {
    try {
        const data = await User.find({})
        res.status(200).json(data);
    } catch (error) {
        console.log(error);

    }

}

const findUserById = async (req, res) => {
    try {
        const data = await User.find({
            _id: req.params._id
        })
        res.status(200).json(data);
    } catch (error) {
        console.log(error);

    }

}


const updateUserById = async (req, res) => {
    // console.log(req.body, "<----------req.body");
    try {
        const data  = await User.updateOne({ _id: req.params._id }, req.body)
        console.log(data);
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getUserDetailsById,
    getAllUserDetails,
    userLogin,
    verifyUser,
    createUser,
    findUserById,
    updateUserById
}

