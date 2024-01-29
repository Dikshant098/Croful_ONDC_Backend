const userController = require('../../controller/authController')

const router = require('express').Router();

// router.post('/register', userController.user)
router.post('/login', userController.userLogin)
router.post('/verifyUser', userController.verifyUser)
router.post('/createUser', userController.createUser)
router.get('/findUserById', userController.findUserById)
// router.get('/getAllUserDetails', userController.getAllUserDetails)
// router.get('/getUserDetailsById', userController.getUserDetailsById)

module.exports = router