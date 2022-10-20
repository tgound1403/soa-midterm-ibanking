const {
    loginUser,
    signupUser,
    getUser,
    sendMessageByEmail,
    verifyUserOTP,
    updateUserTuition,
    updateOTP,
} = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/:StudentID', getUser);

router.post('/signup', signupUser);

router.post('/login', loginUser);

router.post('/sendEmail', sendMessageByEmail);

router.post('/verifyOTP', verifyUserOTP);

router.put('/updateTuition', updateUserTuition);

router.put('/resetOTP/:StudentID', updateOTP);

module.exports = router;
