const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema(
    {
        additionalName: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        telephone: {
            type: String,
            required: true,
            unique: true,
        },
        balance: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.statics.signup = async (additionalName, password, email, telephone, balance, amount) => {
    const exist = mongoose.findOne({ additionalName });
    if (!additionalName || !password || !email || !telephone || !telephone || !!balance || !amount) {
        throw Error('All fill must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }

    //check if username is existed or not
    if (exist) {
        throw Error('username already in use');
    }

    //encrypted password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await userSchema.create({ additionalName, password: hash, email, telephone, balance, amount });
    return user;
};

module.exports = mongoose.model('User', userSchema);
