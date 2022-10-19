const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');
const { generateOTP } = require('../services/OTP');
const { sendEmail } = require('../services/Mail');

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
        OTP: {
            type: String,
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
    const otpGenerated = await generateOTP();

    const user = await this.create({
        additionalName,
        password: hash,
        StudentID,
        email,
        telephone,
        balance,
        amount,
        OTP: otpGenerated,
    });

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

userSchema.statics.getUserInfo = async function (StudentID) {
    if (!StudentID) {
        throw Error('URL must has one StudentID param');
    }

    const exist = await this.findOne({ StudentID });
    if (!exist) {
        throw Error('Invalid StudentID');
    }

    return exist;
};

userSchema.statics.sendOTP = async function (email) {
    const { OTP } = await this.findOne({ email });
    try {
        const response = await sendEmail({
            to: email,
            OTP,
        });
        console.log('Mail sended successfully <3');
        console.log(response);
        return true;
    } catch (error) {
        console.log('Something wrong while sending mail :((');
        console.log(error);
        return false;
    }
};

userSchema.statics.verifyOTP = async function (OTP) {
    const exist = await this.findOne({ OTP });
    return !exist ? false : true;
};

userSchema.statics.updateTuition = async function (StudentID, balance, amount) {
    if (!balance || !amount) {
        throw Error('All fill must be filled');
    }

    //update new balance for user
    const newBalance = balance - amount;

    //update tuition for user
    await this.findOneAndUpdate({ StudentID }, { $set: { balance: newBalance, amount: 0 } });
    const newUserData = await this.findOne({ StudentID });
    return newUserData;
};

module.exports = mongoose.model('User', userSchema);
