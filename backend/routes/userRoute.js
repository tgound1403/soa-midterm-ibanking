const { loginUser, signupUser, getUser } = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.get('/:StudentID', getUser);

router.post('/signup', signupUser);

router.post('/login', loginUser);

module.exports = router;
