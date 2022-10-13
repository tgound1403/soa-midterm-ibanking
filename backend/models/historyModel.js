const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const historySchema = new Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        additionalName: {
            type: String,
            required: true,
        },
        StudentID: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

historySchema.statics.appendData = async function (userID, additionalName, StudentID, email, amount) {
    if (!userID || !additionalName || !StudentID || !email || !amount) {
        throw Error('All fill must be filled');
    }

    const exist = await User.findOne({ StudentID });
    if (!exist) {
        throw Error('Invalid StudentID');
    }

    const data = await this.create({ userID, additionalName, StudentID, email, amount });
    return data;
};

historySchema.statics.getUserHistoryTransaction = async function (StudentID) {
    if (!StudentID) {
        throw Error('URL must has one userID params');
    }

    const exist = await this.findOne({ StudentID });
    if (!exist) {
        throw Error('Invalid userID');
    }

    return exist;
};

module.exports = mongoose.model('History', historySchema);
