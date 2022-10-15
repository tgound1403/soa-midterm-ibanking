require('dotenv').config();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { response } = require('express');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

const signupUser = async (req, res) => {
    const { additionalName, password, StudentID, email, telephone, balance, amount } = req.body;

    try {
        const user = await User.signup(additionalName, password, StudentID, email, telephone, balance, amount);
        //create token for each user
        const token = await createToken(user._id);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { additionalName, password } = req.body;
    try {
        const user = await User.login(additionalName, password);
        const token = await createToken(user._id);
        res.status(200).json({
            additionalName: user.additionalName,
            password: user.password,
            email: user.email,
            StudentID: user.StudentID,
            telephone: user.telephone,
            balance: user.balance,
            amount: user.amount,
            OTP: user.OTP,
            token,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUser = async (req, res) => {
    const { StudentID } = req.params;
    try {
        const user = await User.getUserInfo(StudentID);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const sendOTPByEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const isVerify = await User.sendOTP(email);
        res.status(200).json(isVerify);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const verifyUserOTP = async (req, res) => {
    const { OTP } = req.body;
    try {
        const user = await User.verifyOTP(OTP);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    loginUser,
    signupUser,
    getUser,
    sendOTPByEmail,
    verifyUserOTP,
};
