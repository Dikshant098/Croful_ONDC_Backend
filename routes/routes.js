const searchRoutes = require('./search/searchRoutes')
const userRoutes = require('./user/userRoutes')
const router = require('express').Router();

router.use('/search', searchRoutes)
router.use('/user', userRoutes)
router.use('/product', searchRoutes)

module.exports = router