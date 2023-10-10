const express = require('express');
const router = express.Router();

/////controller//////
const userController = require('../controller/userController')
const adminController = require('../controller/adminController')
const { uploadSingleFile } = require('../util/multer');

//////User Routes///////////////////
router.post('/signup', userController.userSignup);
router.post('/login', userController.userLogin)
router.post('/verifyUserToken', userController.verifyToken)
router.post('/updateImage/:id', uploadSingleFile, userController.userImageUpdate)
//////Admin Routes///////////////////
router.post('/adminLogin', adminController.adminLogin)
router.get('/getAllUsers', adminController.getAllUsers)
router.delete('/deleteUser/:id', adminController.deleteUser)
router.get('/adminEditUser/:id', adminController.getUserDetails)
router.put('/updateUser/:id', adminController.updateUser);
router.get('/searchUser/:userkey', adminController.adminSearchUser)


module.exports = router;