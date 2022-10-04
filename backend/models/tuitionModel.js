const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tuitionSchema = new Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        tuition: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Tuition', tuitionSchema);
