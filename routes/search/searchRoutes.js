const router = require('express').Router();

const searchController = require('../../controller/searchContoller')
router.get('/searchByProduct/:product', searchController.searchByProduct)
router.get('/searchByCategory/:category', searchController.searchByCategory)

module.exports = router
