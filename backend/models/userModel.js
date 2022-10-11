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
        StudentID: {
            type: String,
            require: true,
            unique: true,
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

userSchema.statics.signup = async function (additionalName, password, StudentID, email, telephone, balance, amount) {
    if (!additionalName || !password || !StudentID || !email || !telephone || !balance || !amount) {
        throw Error('All fill must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }

    //add user to database
    const exist = await this.findOne({ additionalName });

    //check if username is existed or not
    if (exist) {
        throw Error('Username already in use');
    }

    //encrypted password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ additionalName, password: hash, StudentID, email, telephone, balance, amount });
    return user;
};

userSchema.statics.login = async function (additionalName, password) {
    if (!additionalName || !password) {
        throw Error('All fill must be filled');
    }

    const user = await this.findOne({ additionalName });
    if (!user) {
        throw Error('Invalid username');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect password');
    }
    return user;
};

module.exports = mongoose.model('User', userSchema);
