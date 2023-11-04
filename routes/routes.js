const searchRoutes = require('./search/searchRoutes')
const router = require('express').Router();

router.use('/search', searchRoutes)

module.exports = router