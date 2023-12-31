const router = require('express').Router();

const searchController = require('../../controller/searchContoller')
router.get('/searchByProduct/:product', searchController.searchByProduct)
router.get('/searchByCategory/:category', searchController.searchByCategory)
router.get('/getProductDetails/:id', searchController.getProductDetailsById)

module.exports = router
