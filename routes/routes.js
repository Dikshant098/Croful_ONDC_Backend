const searchRoutes = require('./search/searchRoutes')
const userRoutes = require('./user/userRoutes')
const locationRoutes = require('./location/locationRoutes')
const cartRoutes = require('./cart/cartRoutes')
const paymentRoutes = require('./payment/paymentRoutes')
const orderRoutes = require('./order/orderRoutes')
const router = require('express').Router();

router.use('/search', searchRoutes)
// router.use('/search', searchRoutes)
router.use('/user', userRoutes)
router.use('/product', searchRoutes)
router.use('/location', locationRoutes )
router.use('/cart', cartRoutes )
router.use('/payment', paymentRoutes )
router.use('/order', orderRoutes )

module.exports = router