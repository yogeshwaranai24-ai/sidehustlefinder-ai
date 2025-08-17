const express = require('express');
const router = express.Router();
const hustleController = require('../controllers/hustleController');

router.post('/recommend', hustleController.getRecommendations);

module.exports = router;