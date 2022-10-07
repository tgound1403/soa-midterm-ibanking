const { loginUser, signupUser } = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.post('/signup', signupUser);

router.post('/login', loginUser);

module.exports = router;
