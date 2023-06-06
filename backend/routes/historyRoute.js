const express = require('express');
const router = express.Router();
const { postHistoryTransaction, getHistoryTransaction } = require('../controllers/historyController');

router.get('/', getHistoryTransaction);
router.post('/', postHistoryTransaction);

module.exports = router;
