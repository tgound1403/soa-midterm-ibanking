const loginUser = (req, res) => {
    res.json({ message: 'login page' });
};

const signupUser = (req, res) => {
    res.json({ message: 'signup page' });
};

module.exports = { loginUser, signupUser };
