const User = require('../models/userModel');

const signupUser = async (req, res) => {
    const { additionalName, password, email, telephone, balance, amount } = req.body;

    try {
        const user = await User.signup(additionalName, password, email, telephone, balance, amount);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = (req, res) => {
    res.json({ message: 'login page' });
};

module.exports = { loginUser, signupUser };
