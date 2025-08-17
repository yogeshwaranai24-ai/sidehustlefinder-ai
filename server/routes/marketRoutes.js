const express = require('express');
const router = express.Router();
const marketController = require('../controllers/marketController');

router.get('/trends', marketController.getMarketTrends);
router.get('/stories', marketController.getSuccessStories);

module.exports = router;