const express = require('express');
const router = express.Router();

/////controller//////
const userController = require('../controller/userController')

////routers///////////
router.post('/signup', userController.userSignup);
router.post('/login', userController.userLogin)
//////////
module.exports = router;