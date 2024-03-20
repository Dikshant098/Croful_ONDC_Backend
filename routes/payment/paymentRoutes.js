const router = require('express').Router()

const paymentController = require('../../controller/paymentController')

router.post('/createOrder', paymentController.createOrder)

module.exports = router
