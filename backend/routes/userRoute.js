const { loginUser, signupUser } = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/signup', signupUser);

router.get('/login', loginUser);

module.exports = router;
