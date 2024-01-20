const router = require('express').Router()

const locationController = require('../../controller/locationController')

router.get('/getlocation', locationController.getLocation)

module.exports = router
