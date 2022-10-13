const express = require('express');
const router = express.Router();
const { postHistoryTransaction, getHistoryTransaction } = require('../controllers/historyController');

router.post('/', postHistoryTransaction);
router.get('/:StudentID', getHistoryTransaction);

module.exports = router;
