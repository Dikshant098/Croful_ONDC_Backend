// const User = require("../models/auth.js");
// const bcrypt = require('bcrypt')
require('dotenv').config()

const user = async (req, res) => {

    // let password = await bcrypt.hash(req.body.password, bcrypt.genSaltSync(8));

    let createUser = {
        // username: req.body.username,
        phone: req.body.phone,
        password: password,
        // phone: req.body.phone
    }

    // console.log(req.body);
    const findUsername = await User.findOne({ username: req.body.username })
    if (!findUsername) {
        const findEmail = await User.findOne({ email: req.body.email })
        if (!findEmail) {
            const data = await User.create(createUser);
            res.status(200).json(data);
            return
        } else {
            res.send({
                msg: "Email already exist"
            })
            return
        }
    }
    else {
        res.send({
            msg: "username already exist"
        })
        return
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
const userLogin = async (req, res) => {
    const { mobile } = req.body
    sendOTP = generateRandomOTP()

    try {
        const message = await client.messages
            .create({
                body: `This is test msg your OTP is ${sendOTP}`,
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
        console.log(error);
    }
}


const verifyUser = async (req, res) => {
    const { userOTP } = req.body
    if (sendOTP === userOTP) {
        res.status(200).json({
            message: "User login successfully done !!"
        })
        sendOTP = null
    }
    else {
        res.status(403).json({
            success: false,
            message: "Invalid Otp. Please resend your Otp to validate."
        })
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
    const data = await User.find({})
    res.status(200).json(data);
}



module.exports = {
    user,
    getUserDetailsById,
    getAllUserDetails,
    userLogin,
    verifyUser
}

