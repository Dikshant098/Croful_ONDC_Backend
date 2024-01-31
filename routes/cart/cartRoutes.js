const router = require('express').Router()

const cartController = require('../../controller/cartController')

router.post('/addToCart', cartController.addtoCart)
router.get('/getCartDetails/:userId', cartController.getCartDetails)
router.delete('/deleteCartDetails/:_id', cartController.deleteCartDetails)
router.put('/updateCartDetails/:_id', cartController.updateCartDetails)

module.exports = router
