const router = require('express').Router();

const userController = require('../../controller/userController')
router.post('/createUser', userController.createUser)

module.exports = router
