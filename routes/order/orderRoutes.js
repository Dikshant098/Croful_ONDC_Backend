const router = require('express').Router()

const orderController = require('../../controller/orderController')

router.post('/createOrder', orderController.createOrder)
router.get('/getOrderDetails/:_id', orderController.getOrderDetails)

module.exports = router
