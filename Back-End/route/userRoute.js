const express = require('express');
const router = express.Router();

/////controller//////
const userController = require('../controller/userController')
const { uploadSingleFile } = require('../util/multer');

////routers///////////
router.post('/signup', userController.userSignup);
router.post('/login', userController.userLogin)
router.post('/verifyUserToken', userController.verifyToken)
router.post('/updateImage/:id', uploadSingleFile, userController.userImageUpdate)
//////////
module.exports = router;