const router = require('express').Router()

const locationController = require('../../controller/locationController')

router.post('/getlocation', locationController.getLocation)

module.exports = router
