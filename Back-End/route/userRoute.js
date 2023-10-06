const express = require('express');
const router = express.Router();

/////controller//////
const userController = require('../controller/userController')

////routers///////////
router.post('/signup', userController.userSignup);

//////////
module.exports = router;