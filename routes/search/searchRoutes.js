const router = require('express').Router();

const searchController = require('../../controller/searchContoller')
router.get('/searchByProduct/:product', searchController.searchByProduct)
router.get('/searchByCategory/:category', searchController.searchByCategory)
router.get('/searchList/:search', searchController.searchList)
router.get('/getProductDetails/:productName', searchController.getProductDetails)

module.exports = router
