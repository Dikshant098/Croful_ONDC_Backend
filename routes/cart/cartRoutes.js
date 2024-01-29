const router = require('express').Router()

const cartController = require('../../controller/cartController')

router.post('/addToCart', cartController.addtoCart)

module.exports = router
