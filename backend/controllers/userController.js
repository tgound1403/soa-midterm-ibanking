require('dotenv').config();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

const signupUser = async (req, res) => {
    const { additionalName, password, email, telephone, balance, amount } = req.body;

    try {
        const user = await User.signup(additionalName, password, email, telephone, balance, amount);
        const token = await createToken(user._id);
        res.status(200).json(user, token);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { additionalName, password } = req.body;
    try {
        const user = await User.login(additionalName, password);
        const token = await createToken(user._id);
        res.status(200).json(user, token);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginUser, signupUser };
