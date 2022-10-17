const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const historySchema = new Schema(
    {
        Sender: {
            type: String,
            required: true,
        },
        senderID: {
            type: String,
            required: true,
        },
        Receiver: {
            type: String,
            require: true,
        },
        receiverID: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

historySchema.statics.appendData = async function (Sender, senderID, Receiver, receiverID, amount, content) {
    if (!Sender || !senderID || !Receiver || !receiverID || !amount || !content) {
        throw Error('All fill must be filled');
    }

    //find if this studentID is already exist on UserDB or not
    const senderExist = await User.findOne({ senderID });
    if (!senderExist) {
        throw Error('Invalid SenderID');
    }

    const receiverExist = await User.findOne({ receiverID });
    if (!receiverExist) {
        throw Error('Invalid ReceiverID');
    }

    const data = await this.create({ Sender, senderID, Receiver, receiverID, amount, content });
    return data;
};

historySchema.statics.getUserHistoryTransaction = async function (Sender, receiverID) {
    if (!Sender || !receiverID) {
        throw Error('Request body must has Sender and receiverID information');
    }

    const exist = await this.find({ Sender, receiverID });
    if (!exist) {
        throw Error('Invalid userID');
    }

    return exist;
};

module.exports = mongoose.model('History', historySchema);
