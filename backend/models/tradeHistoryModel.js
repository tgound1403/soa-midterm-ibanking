const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeHistorySchema = new Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        additionalName: {
            type: String,
            required: true,
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

module.exports = mongoose.model('History', tradeHistorySchema);
