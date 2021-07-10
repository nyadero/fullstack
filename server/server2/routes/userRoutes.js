const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateToken } = require('../../middlewares/Authmiddleware');

// create, delete user accounts
// register
router.post('/', userController.createAccount);

// log in
router.post('/login', userController.loginUser);

// validate user
router.get('/validation', validateToken, userController.validateUser);

module.exports = router;