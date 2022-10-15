const { loginUser, signupUser, getUser, sendOTPByEmail, verifyUserOTP } = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/:StudentID', getUser);

router.post('/signup', signupUser);

router.post('/login', loginUser);

router.post('/sendOTP', sendOTPByEmail);

router.post('/verifyOTP', verifyUserOTP);

module.exports = router;
