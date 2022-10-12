const HistoryTransaction = require('../models/historyModel');

//append history data to database
const postHistoryTransaction = async (req, res) => {
    const { userID, additionalName, StudentID, email, amount } = req.body;
    try {
        const data = await HistoryTransaction.appendData(userID, additionalName, StudentID, email, amount);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get a specific user history, note that this 'id' object is defined in routes
const getHistoryTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await HistoryTransaction.getUserHistoryTransaction(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    postHistoryTransaction,
    getHistoryTransaction,
};
