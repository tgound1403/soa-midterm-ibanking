const HistoryTransaction = require('../models/historyModel');

//append history data to database
const postHistoryTransaction = async (req, res) => {
    const { Sender, senderID, Receiver, receiverID, amount, content } = req.body;
    try {
        const data = await HistoryTransaction.appendData(Sender, senderID, Receiver, receiverID, amount, content);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get a specific user history
const getHistoryTransaction = async (req, res) => {
    const { Sender, receiverID } = req.query;
    try {
        const data = await HistoryTransaction.getUserHistoryTransaction(Sender, receiverID);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    postHistoryTransaction,
    getHistoryTransaction,
};
