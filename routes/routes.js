const searchRoutes = require('./search/searchRoutes')
const userRoutes = require('./user/userRoutes')
const router = require('express').Router();

router.use('/search', searchRoutes)
router.use('/user', userRoutes)

module.exports = router