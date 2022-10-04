const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeHistorySchema = new Schema(
    {
        userID: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('History', tradeHistorySchema);
