const express = require('express');
const router = express.Router();
const { postHistoryTransaction, getHistoryTransaction } = require('../controllers/historyController');

router.post('/', postHistoryTransaction);
router.get('/:id', getHistoryTransaction);

module.exports = router;
