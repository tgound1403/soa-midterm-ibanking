const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    //verify authorization
    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    const token = authorization.split(' ')[1];

    //verify the token
    try {
        const { _id } = jwt.verify(token, process.env.SECRET);

        //attaching the user property to request object
        //when this middleware done, all the request in others controller
        //will have this user property (not that user property is created by us)
        req.user = await User.findById(_id).select('_id');
        next();
    } catch (error) {
        return res.status(400).json({ error: 'Request is not authorized' });
    }
};

module.exports = requireAuth;
